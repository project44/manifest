import type { DOMProps, StyleProps } from '../../types';
import type { AriaDateRangePickerProps } from '@react-types/datepicker';
import type { DateValue } from '@react-types/calendar';
import * as React from 'react';
import { CalendarRange } from '../CalendarRange';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { Popover } from '../Popover';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useButton } from '@react-aria/button';
import { useDateRangePicker } from '@react-aria/datepicker';
import { useDateRangePickerState } from '@react-stately/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from '../DatePicker/DatePicker.styles';
import { DefinedRange } from '../internal/CalendarRanges';

export interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue>, StyleProps {
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

  /**
   * Allows to show or hide the calendar of the component
   *
   * @default true
   * @example
   * <DateRangePicker showCalendar={false} />
   */
  showCalendar?: boolean;

  /**
   * Allows to pass or avoid the ranges to the component and shoen them instead of the predefined ones
   *
   * @default false
   * @example
   * <DateRangePicker showRanges={false} />
   */
  showRanges?: boolean;

  /**
   * Brings the list of ranges defined to the component
   */
  ranges?: DefinedRange[];
}

export const DateRangePicker = createComponent<'div', DateRangePickerProps>(
  (props, forwardedRef) => {
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
      ranges,
      showCalendar = true,
      showRanges = false,
      label,
      labelProps: labelPropsProp = {},
      placeholder,
      size,
      startIcon,
      validationState,
    } = props;

    const state = useDateRangePickerState(props);

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
    } = useDateRangePicker(props, state, triggerRef);
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

    const getDisplayValue = () => {
      const { start, end } = state.value;

      const fromDate = start ? `${start.month} / ${start.day} / ${start.year}` : undefined;
      const toDate = end ? `${end.month} / ${end.day} / ${end.year}` : undefined;

      return fromDate && toDate ? `${fromDate} - ${toDate}` : placeholder;
    };

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
            <Typography variant="subtext">{getDisplayValue()}</Typography>
          </button>

          <span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--end')}>
            <Icon icon="calendar_month" />
          </span>

          {state.isOpen && (
            <Popover
              {...dialogProps}
              className="manifest-datepicker__popover"
              isOpen={state.isOpen}
              onClose={() => state.setOpen(false)}
              placement="bottom start"
              ref={popoverRef}
              targetRef={triggerRef}
            >
              <CalendarRange
                className="manifest-datepicker__calendar"
                {...calendarProps}
                showCalendar={showCalendar}
                showRanges={showRanges}
                ranges={ranges}
              />
            </Popover>
          )}
        </Comp>
      </FormControl>
    );
  },
);
