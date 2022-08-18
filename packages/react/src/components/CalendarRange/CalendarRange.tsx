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
import { useRangeCalendarState } from '@react-stately/calendar';
import { useStyles } from '../Calendar/Calendar.styles';

export interface CalendarRangeProps extends RangeCalendarProps<DateValue>, StyleProps {}

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
});
