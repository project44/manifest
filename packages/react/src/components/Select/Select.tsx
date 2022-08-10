import type { DOMProps, StyleProps } from '../../types';
import type { AriaSelectProps } from '@react-types/select';
import * as React from 'react';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { ListBoxBase, ListBoxBaseProps } from '../internal/ListBoxBase';
import { mergeProps, useLayoutEffect, useResizeObserver } from '@react-aria/utils';
import { cx } from '../../styles';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { useSelectState } from '@react-stately/select';
import { useStyles } from './Select.styles';

type SelectElement = React.ElementRef<'div'>;

interface SelectProps extends AriaSelectProps<object>, DOMProps, StyleProps {
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
    isRequired,
    helperText,
    helperTextProps = {},
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
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const { className } = useStyles({
    hasStartIcon: !!startIcon,
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    isPressed,
    size,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-select': true,
    'manifest-select--disabled': isDisabled,
    'manifest-select--invalid': isInvalid,
    [`manifest-select--${size}`]: size,
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
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
      isRequired={isRequired}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
      validationState={validationState}
    >
      <div className={classes} ref={forwardedRef}>
        {startIcon && (
          <span className={cx('manifest-select__icon', 'manifest-select__icon--start')}>
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
          className="manifest-select__input"
          ref={triggerRef}
        >
          <Typography {...valueProps} variant="subtext">
            {state.selectedItem ? state.selectedItem.rendered : placeholder}
          </Typography>
        </button>

        <span className={cx('manifest-select__icon', 'manifest-select__icon--end')}>
          <Icon icon="expand_more" />
        </span>

        <Popover
          {...positionProps}
          className="manifest-select__popover"
          css={{ minWidth: popoverWidth, width: popoverWidth }}
          isOpen={state.isOpen}
          onClose={state.close}
          ref={popoverRef}
        >
          <ListBoxBase
            {...(menuProps as ListBoxBaseProps)}
            className="manifest-select__list-box"
            disallowEmptySelection
            ref={listBoxRef}
            state={state}
          />
        </Popover>
      </div>
    </FormControl>
  );
});

if (__DEV__) {
  Select.displayName = 'ManifestSelect';
}

export { Select };
export type { SelectProps };
