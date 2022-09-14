import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import type { CalendarDate } from '@internationalized/date';
import * as React from 'react';
import { getDayOfWeek, isSameDay, isSameMonth, isToday } from '@internationalized/date';
import { cx } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { useCalendarCell } from '@react-aria/calendar';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useLocale } from '@react-aria/i18n';
import { useStyles } from './CalendarCell.styles';

export interface CalendarCellProps {
  /**
   * The current month to helpe determine out of range dates.
   */
  currentMonth: CalendarDate;
  /**
   * The date that this cell represents.
   */
  date: CalendarDate;
  /**
   * The calendar state.
   */
  state: CalendarState | RangeCalendarState;
}

/** @private */
export function CalendarCell(props: CalendarCellProps) {
  const { currentMonth, date, state } = props;

  const ref = React.useRef<HTMLSpanElement>(null);

  const { cellProps, buttonProps, isPressed, isSelected, isDisabled, isInvalid, formattedDate } =
    useCalendarCell(
      {
        ...props,
        isDisabled: !isSameMonth(date, currentMonth),
      },
      state,
      ref,
    );
  const { locale } = useLocale();

  const dayOfWeek = getDayOfWeek(date, locale);
  const highlightedRange = 'highlightedRange' in state && state.highlightedRange;

  const isUnavailable = state.isCellUnavailable(date) && !isDisabled;
  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const isLastSelectedBeforeDisabled =
    !isDisabled && !isInvalid && state.isCellUnavailable(date.add({ days: 1 }));
  const isFirstSelectedAfterDisabled =
    !isDisabled && !isInvalid && state.isCellUnavailable(date.subtract({ days: 1 }));
  const isSelectionStart =
    isSelected && highlightedRange && isSameDay(date, highlightedRange.start);
  const isSelectionEnd = isSelected && highlightedRange && isSameDay(date, highlightedRange.end);
  const isRangeStart =
    isSelected && (isFirstSelectedAfterDisabled || dayOfWeek === 0 || date.day === 1);
  const isRangeEnd =
    isSelected &&
    (isLastSelectedBeforeDisabled ||
      dayOfWeek === 6 ||
      date.day === currentMonth.calendar.getDaysInMonth(currentMonth));

  const { focusProps, isFocusVisible } = useFocusRing();
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const { className } = useStyles({
    isDisabled,
    isHovered,
    isFocusVisible,
    isOutsideMonth,
    isPressed,
    isRangeEnd,
    isRangeStart,
    isRangeSelection: isSelected && 'highlightedRange' in state,
    isSelected,
    isSelectionEnd,
    isSelectionStart,
    isToday: isToday(date, state.timeZone),
    isUnavailable,
  });

  return (
    <td {...cellProps} className={cx(className, 'manifest-calendar-cell')}>
      <span
        {...mergeProps(buttonProps, hoverProps, focusProps)}
        className="manifest-calendar-cell__button"
        ref={ref}
      >
        <span className="manifest-calendar-cell__text">
          <span>{formattedDate}</span>
        </span>
      </span>
    </td>
  );
}
