import type { AriaDateRangePickerProps } from '@react-types/datepicker';
import type { DOMProps } from '@react-types/shared';
import * as React from 'react';
import { CalendarRange, DateValue } from '../Calendar';
import { CSS, cx, useDatePickerStyles } from '../DatePicker/DatePicker.styles';
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
import { useOverlayPosition } from '@react-aria/overlays';

/**
 * -----------------------------------------------------------------------------------------------
 * DateRangePicker
 * -----------------------------------------------------------------------------------------------
 */

type DateRangePickerElement = React.ElementRef<'div'>;

interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue>, DOMProps {
  /**
   * Class name attached to the root element.
   */
  className?: string;
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

const DateRangePicker = React.forwardRef<DateRangePickerElement, DateRangePickerProps>(
  (props, forwardedRef) => {
    const {
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

    const { overlayProps: positionProps } = useOverlayPosition({
      targetRef: triggerRef,
      offset: 4,
      overlayRef: popoverRef,
      placement: 'bottom start',
      shouldFlip: true,
      isOpen: state.isOpen,
    });

    const isInvalid = validationState === 'invalid';

    const { buttonProps, isPressed } = useButton({ ...triggerProps, isDisabled }, triggerRef);
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ autoFocus });
    const { hoverProps, isHovered } = useHover({ isDisabled });

    const { className } = useDatePickerStyles({
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
        <div
          {...groupProps}
          className={cx('manifest-datepicker', className, classNameProp)}
          ref={forwardedRef}
        >
          {startIcon && (
            <span className={cx('manifest-datepicker--icon', 'manifest-datepicker--icon__start')}>
              {startIcon}
            </span>
          )}

          <button
            {...mergeProps(buttonProps, focusProps, hoverProps)}
            className="manifest-datepicker--input"
            ref={triggerRef}
          >
            <Typography variant="subtext">{getDisplayValue()}</Typography>
          </button>

          <span className={cx('manifest-datepicker--icon', 'manifest-datepicker--icon__end')}>
            <Icon icon="calendar_month" />
          </span>

          <Popover
            {...mergeProps(dialogProps, positionProps)}
            className="manifest-datepicker--popover"
            isOpen={state.isOpen}
            onClose={() => state.setOpen(false)}
            ref={popoverRef}
          >
            <CalendarRange {...calendarProps} />
          </Popover>
        </div>
      </FormControl>
    );
  },
);

if (__DEV__) {
  DateRangePicker.displayName = 'ManifestDateRangePicker';
}

DateRangePicker.toString = () => '.manifest-datepicker';

export { DateRangePicker };
export type { DateRangePickerProps };
