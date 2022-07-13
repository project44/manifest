import type {
  CalendarProps as AriaCalendarProps,
  RangeCalendarProps as AriaRangeCalendarProps,
} from '@react-types/calendar';
import type { DOMProps, RangeValue } from '@react-types/shared';
import type { AriaButtonProps } from '@react-types/button';
import * as React from 'react';
import {
  CalendarDate,
  createCalendar,
  DateValue,
  endOfMonth,
  getDayOfWeek,
  getWeeksInMonth,
  isSameDay,
  isSameMonth,
  isToday,
} from '@internationalized/date';
import {
  CSS,
  cx,
  useCalendarStyles,
  useCalendarDayStyles,
  useCalendarHeaderStyles,
  useCalendarTableStyles,
} from './Calendar.styles';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import {
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useRangeCalendar,
} from '@react-aria/calendar';
import {
  CalendarState,
  RangeCalendarState,
  useCalendarState,
  useRangeCalendarState,
} from '@react-stately/calendar';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { Icon } from '../Icon';
import { IconButton } from '../Button';
import { Separator } from '../Separator';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';

/**
 * -----------------------------------------------------------------------------------------------
 * Calendar Context
 * -----------------------------------------------------------------------------------------------
 */

interface CalendarContext {
  nextButtonProps: AriaButtonProps;
  prevButtonProps: AriaButtonProps;
  state: CalendarState | RangeCalendarState;
}

const CalendarContext = React.createContext<CalendarContext | null>(null);

const useCalendarContext = () => React.useContext(CalendarContext);

/**
 * -----------------------------------------------------------------------------------------------
 * Calendar
 * -----------------------------------------------------------------------------------------------
 */

type CalendarElement = React.ElementRef<'div'>;

interface CalendarProps extends AriaCalendarProps<DateValue>, DOMProps {
  /**
   * Class name attached to the root element.
   */
  className?: string;
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const Calendar = React.forwardRef<CalendarElement, CalendarProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { locale } = useLocale();

  const state = useCalendarState({
    ...other,
    locale,
    visibleDuration: { months: 1 },
    createCalendar,
  });

  const { calendarProps, nextButtonProps, prevButtonProps } = useCalendar(other, state);

  const { className } = useCalendarStyles({ css });

  return (
    <div
      {...calendarProps}
      className={cx('manifest-calendar', className, classNameProp)}
      ref={forwardedRef}
    >
      <CalendarContext.Provider value={{ nextButtonProps, prevButtonProps, state }}>
        <CalendarHeader />
        <Separator />
        <CalendarTable />
      </CalendarContext.Provider>
    </div>
  );
});

if (__DEV__) {
  Calendar.displayName = 'ManifestCalendar';
}

Calendar.toString = () => '.manifest-calendar';

/**
 * -----------------------------------------------------------------------------------------------
 *  RangeCalendar
 * -----------------------------------------------------------------------------------------------
 */

type CalendarRangeElement = React.ElementRef<'div'>;

interface CalendarRangeProps extends AriaRangeCalendarProps<DateValue>, DOMProps {
  /**
   * Class name attached to the root element.
   */
  className?: string;
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const CalendarRange = React.forwardRef<CalendarRangeElement, CalendarRangeProps>(
  (props, forwardedRef) => {
    const { className: classNameProp, css, ...other } = props;

    const calendarRef = React.useRef<HTMLDivElement>(null);

    const { locale } = useLocale();

    const state = useRangeCalendarState({
      ...other,
      locale,
      visibleDuration: { months: 1 },
      createCalendar,
    });

    const { calendarProps, nextButtonProps, prevButtonProps } = useRangeCalendar(
      other,
      state,
      calendarRef,
    );

    const { className } = useCalendarStyles({ css });

    return (
      <div
        {...calendarProps}
        className={cx('manifest-calendar', className, classNameProp)}
        ref={mergeRefs(calendarRef, forwardedRef)}
      >
        <CalendarContext.Provider value={{ nextButtonProps, prevButtonProps, state }}>
          <CalendarHeader />
          <Separator />
          <CalendarTable />
        </CalendarContext.Provider>
      </div>
    );
  },
);

if (__DEV__) {
  CalendarRange.displayName = 'ManifestCalendarRange';
}

CalendarRange.toString = () => '.manifest-calendar';

/**
 * -----------------------------------------------------------------------------------------------
 * CalendarDay - The content of the day cell.
 * -----------------------------------------------------------------------------------------------
 */

interface CalendarDayProps {
  /**
   * The current month to helpe determine out of range dates.
   */
  currentMonth: CalendarDate;
  /**
   * The date that this cell represents.
   */
  date: CalendarDate;
}

/**
 * @private
 */
const CalendarDay: React.FC<CalendarDayProps> = props => {
  const { currentMonth, date } = props;

  const { state } = useCalendarContext() as CalendarContext;

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

  const { className } = useCalendarDayStyles({
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
    <td {...cellProps} className="manifest-calendar-table--cell">
      <span
        {...mergeProps(buttonProps, hoverProps, focusProps)}
        className={cx('manifest-calendar-day', className)}
        ref={ref}
      >
        <span className="manifest-calendar-day--text">
          <span>{formattedDate}</span>
        </span>
      </span>
    </td>
  );
};

/**
 * -----------------------------------------------------------------------------------------------
 * CalendarHeader - Month navigation and label.
 * -----------------------------------------------------------------------------------------------
 */

/**
 * @private
 */
const CalendarHeader: React.FC<unknown> = () => {
  const { nextButtonProps, prevButtonProps, state } = useCalendarContext() as CalendarContext;

  const { direction } = useLocale();
  const currentMonth = state.visibleRange.start;
  const dateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    era:
      currentMonth.calendar.identifier === 'gregory' && currentMonth.era === 'BC'
        ? 'short'
        : undefined,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone,
  });

  const { className } = useCalendarHeaderStyles();

  return (
    <div className={cx('manifest-calendar-header', className)}>
      <IconButton {...prevButtonProps} size="small" variant="tertiary">
        <Icon icon={direction === 'rtl' ? 'arrow_right' : 'arrow_left'} />
      </IconButton>
      <Typography variant="subtext">
        {dateFormatter.format(state.visibleRange.start.toDate(state.timeZone))}
      </Typography>
      <IconButton {...nextButtonProps} size="small" variant="tertiary">
        <Icon icon={direction === 'rtl' ? 'arrow_left' : 'arrow_right'} />
      </IconButton>
    </div>
  );
};

/**
 * -----------------------------------------------------------------------------------------------
 * CalendarTable - List of days and weeks for the calendar.
 * -----------------------------------------------------------------------------------------------
 */

/**
 * @private
 */
const CalendarTable: React.FC<unknown> = () => {
  const { state } = useCalendarContext() as CalendarContext;

  const { locale } = useLocale();

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
  const startDate = state.visibleRange.start.add({});
  const endDate = endOfMonth(startDate);

  const { gridProps, headerProps, weekDays } = useCalendarGrid({ endDate, startDate }, state);

  const { className } = useCalendarTableStyles();

  return (
    <div className="manifest-calendar-table--wrapper">
      <table {...gridProps} className={className}>
        <thead className="manifest-calendar-table--head" {...headerProps}>
          <tr className="manifest-calendar-table--row">
            {weekDays.map((weekday, index) => (
              <th className="manifest-calendar-table--column" scope="col" key={index}>
                <Typography aria-hidden="true" variant="caption">
                  {weekday}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="manifest-calendar-table--body">
          {[...new Array(weeksInMonth).keys()].map(weekIndex => (
            <tr className="manifest-calendar-table--row" key={weekIndex}>
              {state
                .getDatesInWeek(weekIndex, startDate)
                .map((date, i) =>
                  date ? (
                    <CalendarDay currentMonth={startDate} date={date} key={i} />
                  ) : (
                    <td key={i} />
                  ),
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Calendar, CalendarRange };
export type { CalendarProps, CalendarRangeProps, DateValue, RangeValue };
