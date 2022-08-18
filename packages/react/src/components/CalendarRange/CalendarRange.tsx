import type { DefinedRange, StyleProps } from '../../types';
import type { RangeCalendarProps } from '@react-types/calendar';
import * as React from 'react';
import { createCalendar, DateValue } from '@internationalized/date';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { mergeRefs } from '@react-aria/utils';
import { CalendarHeader } from '../internal/CalendarHeader';
import { CalendarTable } from '../internal/CalendarTable';
import { Separator } from '../Separator';
import { useLocale } from '@react-aria/i18n';
import { useRangeCalendar } from '@react-aria/calendar';
import { useRangeCalendarState } from '@react-stately/calendar';
import { useStyles } from '../Calendar/Calendar.styles';

export interface CalendarRangeProps extends RangeCalendarProps<DateValue>, StyleProps {
  /**
   * Allows to show or hide the calendar of the component
   *
   * @default true
   * @example
   * <DateRangePicker showCalendar={false} />
   */
  showCalendar?: boolean;

  /**
   * Allows to pass or avoid the ranges to the component
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

export const CalendarRange = createComponent<'div', CalendarRangeProps>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

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

  const { className } = useStyles({ css });
  const definedRanges: DefinedRange[] = showRanges && ranges ? ranges : getDefaultRanges();

  return (
    <Comp
      {...calendarProps}
      className={cx(className, classNameProp, 'manifest-range-calendar')}
      ref={mergeRefs(calendarRef, forwardedRef)}
    >
      <CalendarHeader
        nextButtonProps={nextButtonProps}
        prevButtonProps={prevButtonProps}
        state={state}
      />
      <Separator />
      <CalendarTable state={state} />
    </Comp>
  );

  /*return (
    <div
      {...calendarProps}
      className={cx(className, classNameProp, 'manifest-range-calendar')}
      ref={mergeRefs(calendarRef, forwardedRef)}
    >
      <CalendarHeader
        nextButtonProps={nextButtonProps}
        prevButtonProps={prevButtonProps}
        state={state}
      />
      <Separator />
      <CalendarTable state={state} />
      {<CalendarSidebar state={state} ranges={definedRanges} />}
      {showCalendar && (
        <div className={cx('manifest-datepicker__calendar')}>
          <CalendarHeader
            nextButtonProps={nextButtonProps}
            prevButtonProps={prevButtonProps}
            state={state}
          />
          <Separator />
          <CalendarTable state={state} />
        </div>
      )}
    </div>
  );*/
});
