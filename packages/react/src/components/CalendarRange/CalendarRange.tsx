import type { RangeCalendarProps } from '@react-types/calendar';
import type { Selection } from '@react-types/shared';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { CalendarRanges, DefinedRange } from '../CalendarRanges';
import { createCalendar, DateValue } from '@internationalized/date';
import { RangeCalendarStateOptions, useRangeCalendarState } from '@react-stately/calendar';
import { cx } from '../../styles';
import { CalendarHeader } from '../CalendarHeader';
import { CalendarTable } from '../CalendarTable';
import { mergeRefs } from '@react-aria/utils';
import { Separator } from '../Separator';
import { useLocale } from '@react-aria/i18n';
import { useRangeCalendar } from '@react-aria/calendar';
import { useStyles } from '../CalendarRange/CalendarRange.styles';

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
  ): DefinedRange | undefined => {
    return definedRanges.find(item => item.key === key.toString());
  };

  const handleRangeChange = (key: Selection, definedRanges: DefinedRange[]): void => {
    const [first] = key;
    const selectedRange = findRangeByKey(first, definedRanges);
    if (selectedRange) {
      const { value } = selectedRange;
      state.setValue({
        start: value.start,
        end: value.end,
      });
    }
  };

  const { calendarProps, nextButtonProps, prevButtonProps } = useRangeCalendar(
    other as RangeCalendarProps<DateValue>,
    state,
    calendarRef,
  );

  const { className } = useStyles({ css, showCalendar });

  return (
    <Comp
      {...calendarProps}
      className={cx(className, classNameProp, 'manifest-range-calendar')}
      ref={mergeRefs(calendarRef, forwardedRef)}
    >
      {showRanges && <CalendarRanges onRangeChange={handleRangeChange} ranges={ranges} />}
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
