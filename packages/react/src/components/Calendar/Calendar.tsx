import type { CalendarProps as AriaCalendarProps } from '@react-types/calendar';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { createCalendar, DateValue } from '@internationalized/date';
import { cx } from '../../styles';
import { CalendarHeader } from '../CalendarHeader';
import { CalendarTable } from '../CalendarTable';
import { Separator } from '../Separator';
import { useLocale } from '@react-aria/i18n';
import { useCalendar } from '@react-aria/calendar';
import { useCalendarState } from '@react-stately/calendar';
import { useStyles } from './Calendar.styles';

export type CalendarElement = 'div';
export type CalendarOptions<T extends As = CalendarElement> = Options<T> &
	AriaCalendarProps<DateValue> &
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
