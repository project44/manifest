import type { DOMProps, StyleProps } from '../../types';
import type { AriaDatePickerProps } from '@react-types/datepicker';
import * as React from 'react';
import { Calendar, DateValue } from '../Calendar';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { Popover } from '../Popover';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useButton } from '@react-aria/button';
import { useDatePicker } from '@react-aria/datepicker';
import { useDatePickerState } from '@react-stately/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './DatePicker.styles';

export interface DatePickerProps extends AriaDatePickerProps<DateValue>, StyleProps {
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
   * Temporary text that occupies the text input when it is empty.
   */
  placeholder?: string;
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

export const DatePicker = createComponent<'div', DatePickerProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    autoFocus,
    className: classNameProp,
    css,
    helperText,
    helperTextProps = {},
    isDisabled,
    isReadOnly,
    isRequired,
    label,
    labelProps: labelPropsProp = {},
    placeholder,
    size,
    startIcon,
    validationState,
  } = props;

  const state = useDatePickerState(props);

  console.log(state);

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const {
    groupProps,
    labelProps,
    buttonProps: triggerProps,
    dialogProps,
    calendarProps,
    descriptionProps,
    errorMessageProps,
  } = useDatePicker(props, state, triggerRef);

  const isInvalid = validationState === 'invalid';

  const { buttonProps, isPressed } = useButton({ ...triggerProps, isDisabled }, triggerRef);
  const { isFocused, isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const { className } = useStyles({
    hasStartIcon: !!startIcon,
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.value,
    isPressed,
    isReadOnly,
    size,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-datepicker': true,
    'manifest-datepicker--disabled': isDisabled,
    'manifest-datepicker--invalid': isInvalid,
    [`manifest-datepicker--${size}`]: size,
  });

  const displayValue = state.value
    ? `${state.value.month} / ${state.value.day} / ${state.value.year}`
    : placeholder;

  return (
    <FormControl
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
      isRequired={isRequired}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
      validationState={validationState}
    >
      <Comp {...groupProps} className={classes} ref={forwardedRef}>
        {startIcon && (
          <span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--start')}>
            {startIcon}
          </span>
        )}

        <button
          {...mergeProps(buttonProps, focusProps, hoverProps)}
          className="manifest-datepicker__input"
          ref={triggerRef}
        >
          <Typography variant="subtext">{displayValue}</Typography>
        </button>

        <span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--end')}>
          <Icon icon="calendar_month" />
        </span>

        <Popover
          className="manifest-datepicker__popover"
          isOpen={state.isOpen}
          onClose={() => state.setOpen(false)}
          overlayProps={dialogProps}
          overlayRef={popoverRef}
          placement="bottom start"
          triggerRef={triggerRef}
        >
          <Calendar className="manifest-datepicker__calendar" {...calendarProps} />
        </Popover>
      </Comp>
    </FormControl>
  );
});
