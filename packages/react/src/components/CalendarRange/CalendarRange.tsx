import type { StyleProps } from '../../types';
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
import { RangeCalendarStateOptions, useRangeCalendarState } from '@react-stately/calendar';
import { useStyles } from '../CalendarRange/CalendarRange.styles';
import { getDefaultRanges } from '../internal/CalendarRanges/defaultDefinedRanges';
import { CalendarRanges, DefinedRange } from '../internal/CalendarRanges';

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
  const {
    as: Comp = 'div',
    className: classNameProp,
    css,
    showCalendar,
    showRanges,
    ranges,
    ...other
  } = props;

  const calendarRef = React.useRef<HTMLDivElement>(null);

  const { locale } = useLocale();

  const state = useRangeCalendarState({
    ...other,
    locale,
    visibleDuration: { months: 1 },
    createCalendar,
  } as RangeCalendarStateOptions);

  const { calendarProps, nextButtonProps, prevButtonProps } = useRangeCalendar(
    other as RangeCalendarProps<DateValue>,
    state,
    calendarRef,
  );

  const { className } = useStyles({ css, showCalendar });
  const definedRanges: DefinedRange[] = showRanges && ranges ? ranges : getDefaultRanges();

  return (
    <Comp
      {...calendarProps}
      className={cx(className, classNameProp, 'manifest-range-calendar')}
      ref={mergeRefs(calendarRef, forwardedRef)}
    >
      {showRanges && <CalendarRanges state={state} ranges={definedRanges} />}
      {showCalendar && (
        <>
          {showRanges && showCalendar && <Separator orientation="vertical" />}
          <div data-testid="calendar-date-picker" className={cx('manifest-datepicker__calendar')}>
            <CalendarHeader
              nextButtonProps={nextButtonProps}
              prevButtonProps={prevButtonProps}
              state={state}
            />
            <Separator />
            <CalendarTable state={state} />
          </div>
        </>
      )}
    </Comp>
  );
});
