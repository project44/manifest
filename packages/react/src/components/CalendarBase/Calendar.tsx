import type { CalendarProps as AriaCalendarProps, DateValue } from '@react-types/calendar';
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import type { AriaButtonProps } from '@react-types/button';
import * as React from 'react';
import { AriaCalendarCellProps, useCalendarCell, useCalendarGrid } from '@react-aria/calendar';
import {
  CalendarDate,
  endOfMonth,
  getWeeksInMonth,
  isSameDay,
  isSameMonth,
  isToday,
} from '@internationalized/date';
import {
  calendarStyles,
  calendarCellStyles,
  calendarGridStyles,
  calendarHeaderStyles,
  CSS,
  cx,
} from './styles';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { mergeProps } from '@react-aria/utils';
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

type CalendarAriaProps = AriaCalendarProps<DateValue>;
type CalendarElement = React.ElementRef<'div'>;
type CalendarNativeProps = Omit<React.ComponentPropsWithoutRef<'div'>, keyof CalendarAriaProps>;

interface CalendarProps extends CalendarNativeProps, CalendarAriaProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Props passed to the next button.
   */
  nextButtonProps: AriaButtonProps;
  /**
   * Props passed to the previous button.
   */
  prevButtonProps: AriaButtonProps;
  /**
   * Current calendar state.
   */
  state: CalendarState | RangeCalendarState;
}

const Calendar = React.forwardRef<CalendarElement, CalendarProps>((props, forwardedRef) => {
  const {
    children,
    className: classNameProp,
    css,
    nextButtonProps,
    prevButtonProps,
    state,
    ...other
  } = props;

  const { className } = calendarStyles({ css });

  return (
    <div
      {...(other as CalendarNativeProps)}
      className={cx('manifest-calendar', className, classNameProp)}
      ref={forwardedRef}
    >
      <CalendarContext.Provider value={{ nextButtonProps, prevButtonProps, state }}>
        {children}
      </CalendarContext.Provider>
    </div>
  );
});

/**
 * -----------------------------------------------------------------------------------------------
 * Calendar Cell
 * -----------------------------------------------------------------------------------------------
 */

type CalendarDateElement = React.ElementRef<'div'>;
type CalendarDateNativeProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  keyof AriaCalendarCellProps
>;

interface CalendarCellProps extends CalendarDateNativeProps, AriaCalendarCellProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * The current month to helpe determine out of range dates.
   */
  currentMonth: CalendarDate;
}

const CalendarCell = React.forwardRef<CalendarDateElement, CalendarCellProps>(
  (props, forwardedRef) => {
    const { className: classNameProp, css, currentMonth, date, ...other } = props;

    const { state } = useCalendarContext() as CalendarContext;

    const dateRef = React.useRef<HTMLButtonElement>(null);

    const { cellProps, buttonProps, isPressed, isSelected, isDisabled, formattedDate } =
      useCalendarCell(props, state, dateRef);

    const highlightedRange = 'highlightedRange' in state && state.highlightedRange;

    const isOutsideMonth = !isSameMonth(currentMonth, date);

    const isSelectionStart = highlightedRange
      ? isSameDay(date, highlightedRange.start)
      : isSelected;
    const isSelectionEnd = highlightedRange ? isSameDay(date, highlightedRange.end) : isSelected;

    const { focusProps, isFocusVisible } = useFocusRing();
    const { hoverProps, isHovered } = useHover({ isDisabled: isDisabled || state.isReadOnly });

    const { className } = calendarCellStyles({
      isDisabled,
      isHovered,
      isFocusVisible,
      isOutsideMonth,
      isPressed,
      isSelected,
      isSelectionEnd,
      isSelectionStart,
      isToday: isToday(date, state.timeZone),
      css,
    });

    return (
      <div
        {...mergeProps(cellProps, other)}
        className={cx('manifest-calendar--cell', className, classNameProp)}
        ref={forwardedRef}
      >
        <button
          {...mergeProps(buttonProps, hoverProps, focusProps)}
          className="manifest-calendar--cell-button"
          ref={dateRef}
        >
          <Typography className="manifest-calendar--cell-text" variant="caption">
            {formattedDate}
          </Typography>
        </button>
      </div>
    );
  },
);

/**
 * -----------------------------------------------------------------------------------------------
 * Calendar Grid
 * -----------------------------------------------------------------------------------------------
 */

type CalendarGridElement = React.ElementRef<'div'>;
type CalendarGridNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface CalendarGridProps extends CalendarGridNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const CalendarGrid = React.forwardRef<CalendarGridElement, CalendarGridProps>(
  (props, forwardedRef) => {
    const { className: classNameProp, css, ...other } = props;

    const { state } = useCalendarContext() as CalendarContext;

    const { locale } = useLocale();

    const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
    const startDate = state.visibleRange.start.add({});
    const endDate = endOfMonth(startDate);

    const { gridProps, headerProps, weekDays } = useCalendarGrid({ endDate, startDate }, state);

    const { className } = calendarGridStyles({ css });
    const { className: cellClassName } = calendarCellStyles();

    return (
      <div
        {...mergeProps(gridProps, other)}
        className={cx('manifest-calendar--grid', className, classNameProp)}
        ref={forwardedRef}
      >
        <div {...headerProps} className="manifest-calendar--grid-row">
          {weekDays.map((day, dayIndex) => (
            <div className={cx('manifest-calendar--cell', cellClassName)} key={dayIndex}>
              <Typography className="manifest-calendar--cell-text" variant="caption">
                {day}
              </Typography>
            </div>
          ))}
        </div>
        {[...new Array(weeksInMonth).keys()].map(weekIndex => (
          <div className="manifest-calendar--grid-row" key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? <CalendarCell currentMonth={startDate} date={date} key={i} /> : null,
              )}
          </div>
        ))}
      </div>
    );
  },
);

/**
 * -----------------------------------------------------------------------------------------------
 * Calendar Header
 * -----------------------------------------------------------------------------------------------
 */

type CalendarHeaderElement = React.ElementRef<'div'>;
type CalendarHeaderNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface CalendarHeaderProps extends CalendarHeaderNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const CalendarHeader = React.forwardRef<CalendarHeaderElement, CalendarHeaderProps>(
  (props, forwardedRef) => {
    const { className: classNameProp, css, ...other } = props;

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

    const { className } = calendarHeaderStyles({ css });

    return (
      <div
        {...other}
        className={cx('manifest-calendar--header', className, classNameProp)}
        ref={forwardedRef}
      >
        <IconButton
          {...prevButtonProps}
          className="manifest-calendar--header-button"
          variant="tertiary"
        >
          <Icon icon={direction === 'rtl' ? 'arrow_right' : 'arrow_left'} />
        </IconButton>

        <Typography aria-hidden className="manifest-calendar--header-title" variant="subtext">
          {dateFormatter.format(state.visibleRange.start.toDate(state.timeZone))}
        </Typography>

        <IconButton
          {...nextButtonProps}
          className="manifest-calendar--header-button"
          variant="tertiary"
        >
          <Icon icon={direction === 'rtl' ? 'arrow_left' : 'arrow_right'} />
        </IconButton>
      </div>
    );
  },
);

export { Calendar, CalendarCell, CalendarGrid, CalendarHeader };
export type { CalendarProps, CalendarCellProps, CalendarGridProps, CalendarHeaderProps };
