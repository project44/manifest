import type { CalendarProps as AriaCalendarProps, DateValue } from '@react-types/calendar';
import * as CalendarBase from '../CalendarBase';
import * as React from 'react';
import { createCalendar } from '@internationalized/date';
import { mergeProps } from '@react-aria/utils';
import { Separator } from '../Separator';
import { useCalendar } from '@react-aria/calendar';
import { useCalendarState } from '@react-stately/calendar';
import { useLocale } from '@react-aria/i18n';

/**
 * -----------------------------------------------------------------------------------------------
 * Calendar
 * -----------------------------------------------------------------------------------------------
 */

type CalendarAriaProps = AriaCalendarProps<DateValue>;
type CalendarElement = React.ElementRef<typeof CalendarBase.Calendar>;

interface CalendarProps
  extends Omit<
      CalendarBase.CalendarProps,
      'defaultValue' | 'nextButtonProps' | 'prevButtonProps' | 'onChange' | 'state'
    >,
    CalendarAriaProps {}

const Calendar = React.forwardRef<CalendarElement, CalendarProps>((props, forwardedRef) => {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    visibleDuration: { months: 1 },
    createCalendar,
  });
  const { calendarProps, nextButtonProps, prevButtonProps } = useCalendar(props, state);

  return (
    <CalendarBase.Calendar
      {...mergeProps(calendarProps, props)}
      nextButtonProps={nextButtonProps}
      prevButtonProps={prevButtonProps}
      state={state}
      ref={forwardedRef}
    >
      <CalendarBase.CalendarHeader />
      <Separator />
      <CalendarBase.CalendarGrid />
    </CalendarBase.Calendar>
  );
});

export { Calendar };
export type { CalendarProps };
