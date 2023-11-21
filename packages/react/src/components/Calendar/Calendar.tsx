import { useCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { useCalendarState } from '@react-stately/calendar';
import type { CalendarProps as AriaCalendarProps } from '@react-types/calendar';
import { createCalendar, DateValue } from '@internationalized/date';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { CalendarHeader } from '../CalendarHeader';
import { CalendarTable } from '../CalendarTable';
import { Separator } from '../Separator';
import { useStyles } from './Calendar.styles';

export type CalendarElement = 'div';
export type CalendarOptions<T extends As = CalendarElement> = AriaCalendarProps<DateValue> &
  Options<T> &
  StyleProps;
export type CalendarProps<T extends As = CalendarElement> = Props<CalendarOptions<T>>;

export const Calendar = createComponent<CalendarOptions>((props, forwardedRef) => {
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
      ref={forwardedRef}
      className={cx(className, classNameProp, 'manifest-calendar')}
    >
      <CalendarHeader
        nextButtonProps={nextButtonProps}
        prevButtonProps={prevButtonProps}
        state={state}
      />
      <div className="manifest-calendar__separator-container">
        <Separator />
      </div>
      <CalendarTable state={state} />
    </Comp>
  );
});

Calendar.displayName = 'Calendar';
