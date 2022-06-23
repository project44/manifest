import type { AriaSelectProps } from '@react-types/select';
import * as LisBoxBase from '../ListBoxBase';
import * as React from 'react';
import { CSS, cx, useSelectStyles } from './Select.styles';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { Item, Section } from '@react-stately/collections';
import { mergeProps, useLayoutEffect, useResizeObserver } from '@react-aria/utils';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { useSelectState } from '@react-stately/select';

/**
 * -----------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------
 */

type SelectAriaProps<T extends object = object> = AriaSelectProps<T>;
type SelectElement = React.ElementRef<'div'>;
type SelectNativeProps = Omit<React.ComponentPropsWithoutRef<'div'>, keyof SelectAriaProps>;

interface SelectProps extends SelectNativeProps, SelectAriaProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Helper text to append to the form control input element.
   */
  helperText?: React.ReactNode;
  /**
   * Props passed to the helper text.
   */
  helperTextProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * Label of the input element
   */
  label?: React.ReactNode;
  /**
   * Props passed to the label.
   */
  labelProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * The size of the combobox
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * Icon displayed at the start of the text field.
   *
   * @example
   * <Combobox startIcon={<Icon />} />
   */
  startIcon?: React.ReactElement;
}

const Select = React.forwardRef<SelectElement, SelectProps>((props, forwardedRef) => {
  const {
    autoComplete,
    autoFocus,
    className: classNameProp,
    css,
    isDisabled,
    helperText,
    helperTextProps: helperTextPropsProp = {},
    label,
    labelProps: labelPropsProp = {},
    name,
    placeholder,
    validationState,
    size = 'medium',
    startIcon,
  } = props;

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const listBoxRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const [popoverWidth, setPopoverWidth] = React.useState<number>(0);

  const state = useSelectState(props);
  const { labelProps, triggerProps, valueProps, menuProps, descriptionProps, errorMessageProps } =
    useSelect(props, state, triggerRef);

  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: popoverRef,
    scrollRef: listBoxRef,
    placement: 'bottom',
    shouldFlip: true,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  const isInvalid = validationState === 'invalid';
  const { buttonProps, isPressed } = useButton(triggerProps, triggerRef);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const { className } = useSelectStyles({
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    isPressed,
    size,
    css,
  });

  const handlResize = React.useCallback(() => {
    if (triggerRef.current) {
      setPopoverWidth(triggerRef.current.offsetWidth);
    }
  }, [triggerRef, setPopoverWidth]);

  useResizeObserver({
    ref: triggerRef,
    onResize: handlResize,
  });

  useLayoutEffect(handlResize, [state.selectedKey, handlResize]);

  return (
    <FormControl
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp)}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
    >
      <div className={cx('manifest-select', className, classNameProp)} ref={forwardedRef}>
        {startIcon && (
          <span className={cx('manifest-select--icon', 'manifest-select--icon__start')}>
            {startIcon}
          </span>
        )}

        <HiddenSelect
          autoComplete={autoComplete}
          isDisabled={isDisabled}
          state={state}
          triggerRef={triggerRef}
          label={label}
          name={name}
        />

        <button
          {...mergeProps(buttonProps, focusProps, hoverProps)}
          className="manifest-select--input"
          ref={triggerRef}
        >
          <Typography {...valueProps} variant="subtext">
            {state.selectedItem ? state.selectedItem.rendered : placeholder}
          </Typography>
        </button>

        <span className={cx('manifest-select--icon', 'manifest-select--icon__end')}>
          <Icon icon="expand_more" />
        </span>

        {state.isOpen && (
          <Popover
            {...positionProps}
            className="manifest-select--popover"
            css={{ minWidth: popoverWidth, width: popoverWidth }}
            isOpen={state.isOpen}
            onClose={state.close}
            ref={popoverRef}
          >
            <LisBoxBase.ListBox
              {...(menuProps as LisBoxBase.ListBoxProps)}
              className="manifest-select--list-box"
              disallowEmptySelection
              ref={listBoxRef}
              state={state}
            />
          </Popover>
        )}
      </div>
    </FormControl>
  );
});

if (__DEV__) {
  Select.displayName = 'ManifestSelect';
}

Select.toString = () => '.manifest-select';

export { Select, Item as SelectItem, Section as SelectSection };
export type { SelectProps };
