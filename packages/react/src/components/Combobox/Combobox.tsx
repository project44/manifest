import type { DOMProps, StyleProps } from '../../types';
import type { AriaComboBoxProps } from '@react-types/combobox';
import * as React from 'react';
import { ListBoxBase, ListBoxBaseProps } from '../internal/ListBoxBase';
import { mergeProps, useLayoutEffect, useResizeObserver } from '@react-aria/utils';
import { cx } from '../../styles';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { useComboBox } from '@react-aria/combobox';
import { useComboBoxState } from '@react-stately/combobox';
import { useFilter } from '@react-aria/i18n';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { useStyles } from './Combobox.styles';

type ComboboxElement = React.ElementRef<'div'>;

interface ComboboxProps extends AriaComboBoxProps<object>, DOMProps, StyleProps {
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
   * Icon displayed at the start of the combobox.
   */
  startIcon?: React.ReactElement;
}

const Combobox = React.forwardRef<ComboboxElement, ComboboxProps>((props, forwardedRef) => {
  const {
    autoFocus,
    className: classNameProp,
    css,
    isDisabled,
    helperText,
    helperTextProps: helperTextPropsProp = {},
    label,
    labelProps: labelPropsProp = {},
    validationState,
    size = 'medium',
    startIcon,
  } = props;

  const isInvalid = validationState === 'invalid';

  const [popoverWidth, setPopoverWidth] = React.useState<number>(0);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const listBoxRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: true,
    menuTrigger: 'focus',
  });
  const { inputProps, listBoxProps, labelProps, descriptionProps, errorMessageProps } = useComboBox(
    {
      ...props,
      inputRef,
      listBoxRef,
      menuTrigger: 'focus',
      popoverRef,
    },
    state,
  );

  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: true,
    within: true,
  });

  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: inputRef,
    overlayRef: popoverRef,
    scrollRef: listBoxRef,
    placement: 'bottom',
    shouldFlip: true,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  const { className } = useStyles({
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    size,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-combobox': true,
    'manifest-combobox--disabled': isDisabled,
    'manifest-combobox--invalid': isInvalid,
    [`manifest-combobox--${size}`]: size,
  });

  const handlResize = React.useCallback(() => {
    if (inputRef.current) {
      setPopoverWidth(inputRef.current.offsetWidth);
    }
  }, [inputRef, setPopoverWidth]);

  useResizeObserver({
    ref: inputRef,
    onResize: handlResize,
  });

  useLayoutEffect(handlResize, [state.selectedKey, handlResize]);

  return (
    <FormControl
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp)}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
      validationState={validationState}
    >
      <div {...mergeProps(hoverProps, focusProps)} className={classes} ref={forwardedRef}>
        {startIcon && (
          <span className={cx('manifest-combobox--icon', 'manifest-combobox--icon__start')}>
            {startIcon}
          </span>
        )}

        <input {...inputProps} className="manifest-combobox--input" ref={inputRef} />

        <span className={cx('manifest-combobox--icon', 'manifest-combobox--icon__end')}>
          <Icon icon="expand_more" />
        </span>

        {/* <Popover
          {...positionProps}
          className="manifest-combobox--popover"
          css={{ minWidth: popoverWidth, width: popoverWidth }}
          isOpen={state.isOpen}
          onClose={state.close}
          ref={popoverRef}
        >
          <ListBoxBase
            {...(listBoxProps as ListBoxBaseProps)}
            className="manifest-combobox--list-box"
            disallowEmptySelection
            ref={listBoxRef}
            state={state}
          />
        </Popover> */}
      </div>
    </FormControl>
  );
});

if (__DEV__) {
  Combobox.displayName = 'ManifestCombobox';
}

export { Combobox };
export type { ComboboxProps };
