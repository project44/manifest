import type { DOMProps, StyleProps } from '../../types';
import type { CalendarProps as AriaCalendarProps } from '@react-types/calendar';
import * as React from 'react';
import { createCalendar, DateValue } from '@internationalized/date';
import { cx } from '../../styles';
import { CalendarHeader } from '../internal/CalendarHeader';
import { CalendarTable } from '../internal/CalendarTable';
import { Separator } from '../Separator';
import { useLocale } from '@react-aria/i18n';
import { useCalendar } from '@react-aria/calendar';
import { useCalendarState } from '@react-stately/calendar';
import { useStyles } from './Calendar.styles';

type CalendarElement = React.ElementRef<'div'>;

interface CalendarProps extends AriaCalendarProps<DateValue>, DOMProps, StyleProps {}

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

  const { className } = useStyles({ css });

  return (
    <div
      {...calendarProps}
      className={cx(className, classNameProp, 'manifest-calendar')}
      ref={forwardedRef}
    >
      <CalendarHeader
        nextButtonProps={nextButtonProps}
        prevButtonProps={prevButtonProps}
        state={state}
      />
      <Separator />
      <CalendarTable state={state} />
    </div>
  );
});

if (__DEV__) {
  Calendar.displayName = 'ManifestCalendar';
}

export { Calendar };
export type { CalendarProps };
