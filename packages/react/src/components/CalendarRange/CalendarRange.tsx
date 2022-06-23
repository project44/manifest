import type { RangeCalendarProps, DateValue } from '@react-types/calendar';
import * as CalendarBase from '../CalendarBase';
import * as React from 'react';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { createCalendar } from '@internationalized/date';
import { Separator } from '../Separator';
import { useRangeCalendar } from '@react-aria/calendar';
import { useRangeCalendarState } from '@react-stately/calendar';
import { useLocale } from '@react-aria/i18n';

/**
 * -----------------------------------------------------------------------------------------------
 * CalendarRange
 * -----------------------------------------------------------------------------------------------
 */

type CalendarRangeAriaProps = RangeCalendarProps<DateValue>;
type CalendarRangeElement = React.ElementRef<typeof CalendarBase.Calendar>;

interface CalendarRangeProps
  extends Omit<
      CalendarBase.CalendarProps,
      'defaultValue' | 'nextButtonProps' | 'prevButtonProps' | 'onChange' | 'state'
    >,
    CalendarRangeAriaProps {}

const CalendarRange = React.forwardRef<CalendarRangeElement, CalendarRangeProps>(
  (props, forwardedRef) => {
    const calendarRef = React.useRef<HTMLDivElement>(null);

    const { locale } = useLocale();

    const state = useRangeCalendarState({
      ...props,
      locale,
      visibleDuration: { months: 1 },
      createCalendar,
    });
    const { calendarProps, nextButtonProps, prevButtonProps } = useRangeCalendar(
      props,
      state,
      calendarRef,
    );

    return (
      <CalendarBase.Calendar
        {...mergeProps(calendarProps, props)}
        nextButtonProps={nextButtonProps}
        prevButtonProps={prevButtonProps}
        state={state}
        ref={mergeRefs(calendarRef, forwardedRef)}
      >
        <CalendarBase.CalendarHeader />
        <Separator />
        <CalendarBase.CalendarGrid />
      </CalendarBase.Calendar>
    );
  },
);

export { CalendarRange };
export type { CalendarRangeProps };
