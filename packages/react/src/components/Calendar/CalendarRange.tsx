import type { DOMProps, StyleProps } from '../../types';
import type { RangeCalendarProps } from '@react-types/calendar';
import * as React from 'react';
import { createCalendar, DateValue } from '@internationalized/date';
import { cx } from '../../styles';
import { mergeRefs } from '@react-aria/utils';
import { CalendarHeader } from './CalendarHeader';
import { CalendarTable } from './CalendarTable';
import { Separator } from '../Separator';
import { useLocale } from '@react-aria/i18n';
import { useRangeCalendar } from '@react-aria/calendar';
import { useRangeCalendarState } from '@react-stately/calendar';
import { useStyles } from './Calendar.styles';

type CalendarRangeElement = React.ElementRef<'div'>;

interface CalendarRangeProps extends RangeCalendarProps<DateValue>, DOMProps, StyleProps {}

const CalendarRange = React.forwardRef<CalendarRangeElement, CalendarRangeProps>(
  (props, forwardedRef) => {
    const { className: classNameProp, css, ...other } = props;

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

    const classes = cx(className, classNameProp, 'manifest-range-calendar');

    return (
      <div {...calendarProps} className={classes} ref={mergeRefs(calendarRef, forwardedRef)}>
        <CalendarHeader
          nextButtonProps={nextButtonProps}
          prevButtonProps={prevButtonProps}
          state={state}
        />
        <Separator />
        <CalendarTable state={state} />
      </div>
    );
  },
);

if (__DEV__) {
  CalendarRange.displayName = 'ManifestCalendarRange';
}

export { CalendarRange };
export type { CalendarRangeProps };
