import * as React from 'react';
import { useRangeCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { mergeRefs } from '@react-aria/utils';
import { RangeCalendarStateOptions, useRangeCalendarState } from '@react-stately/calendar';
import type { RangeCalendarProps } from '@react-types/calendar';
import type { Selection } from '@react-types/shared';
import { createCalendar, DateValue } from '@internationalized/date';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { CalendarHeader } from '../CalendarHeader';
import { CalendarRanges, DefinedRange } from '../CalendarRanges';
import { CalendarTable } from '../CalendarTable';
import { Separator } from '../Separator';
import { useStyles } from './CalendarRange.styles';

export type CalendarElement = 'div';

export interface CalendarRangeOptions<T extends As = CalendarElement>
  extends Options<T>,
    RangeCalendarProps<DateValue>,
    StyleProps {
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

export type CalendarRangeProps<T extends As = CalendarElement> = Props<CalendarRangeOptions<T>>;

export const CalendarRange = createComponent<CalendarRangeOptions>((props, forwardedRef) => {
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

  const findRangeByKey = (
    key: React.Key,
    definedRanges: DefinedRange[],
  ): DefinedRange | undefined => definedRanges.find((item) => item.key === key.toString());

  const handleRangeChange = React.useCallback(
    (key: Selection, definedRanges: DefinedRange[]): void => {
      const [first] = key;
      const selectedRange = findRangeByKey(first, definedRanges);

      if (selectedRange) {
        const { value } = selectedRange;

        state.setValue({
          start: value.start,
          end: value.end,
        });
      }
    },
    [state],
  );

  const { calendarProps, nextButtonProps, prevButtonProps } = useRangeCalendar(
    other as RangeCalendarProps<DateValue>,
    state,
    calendarRef,
  );

  const { className } = useStyles({ css, showCalendar });

  return (
    <Comp
      {...calendarProps}
      ref={mergeRefs(calendarRef, forwardedRef)}
      className={cx(className, classNameProp, 'manifest-range-calendar')}
    >
      {showRanges && <CalendarRanges ranges={ranges} onRangeChange={handleRangeChange} />}
      {showCalendar && (
        <>
          {showRanges && showCalendar && <Separator orientation="vertical" />}
          <div className={cx('manifest-datepicker__calendar')} data-testid="calendar-date-picker">
            <CalendarHeader
              nextButtonProps={nextButtonProps}
              prevButtonProps={prevButtonProps}
              state={state}
            />
            <div className="manifest-range-calendar__separator-container">
              <Separator />
            </div>
            <CalendarTable state={state} />
          </div>
        </>
      )}
    </Comp>
  );
});
