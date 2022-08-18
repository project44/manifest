import type { CalendarProps as AriaCalendarProps } from '@react-types/calendar';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { createCalendar, DateValue } from '@internationalized/date';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { CalendarHeader } from '../internal/CalendarHeader';
import { CalendarTable } from '../internal/CalendarTable';
import { Separator } from '../Separator';
import { useLocale } from '@react-aria/i18n';
import { useCalendar } from '@react-aria/calendar';
import { useCalendarState } from '@react-stately/calendar';
import { useStyles } from './Calendar.styles';

export interface CalendarProps extends AriaCalendarProps<DateValue>, StyleProps {}

export const Calendar = createComponent<'div', CalendarProps>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

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
    <Comp
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
    </Comp>
  );
});
