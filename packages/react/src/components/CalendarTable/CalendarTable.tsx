import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import * as React from 'react';
import { endOfMonth, getWeeksInMonth } from '@internationalized/date';
import { CalendarCell } from '../CalendarCell';
import { cx } from '../../styles';
import { Typography } from '../Typography';
import { useCalendarGrid } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { useStyles } from './CalendarTable.styles';

export interface CalendarTableProps {
	/**
	 * The calendar state.
	 */
	state: CalendarState | RangeCalendarState;
}

/** @private */
export function CalendarTable(props: CalendarTableProps) {
	const { state } = props;

	const { locale } = useLocale();

	const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
	const startDate = state.visibleRange.start.add({});
	const endDate = endOfMonth(startDate);

	const { gridProps, headerProps, weekDays } = useCalendarGrid({ endDate, startDate }, state);

	const { className } = useStyles();

	return (
		<div className={cx(className, 'manifest-calendar-table')}>
			<table {...gridProps} className="manifest-calendar-table__table">
				<thead className="manifest-calendar-table__head" {...headerProps}>
					<tr className="manifest-calendar-table__row">
						{weekDays.map((weekday, index) => (
							<th className="manifest-calendar-table__column" scope="col" key={index}>
								<Typography aria-hidden="true" variant="caption">
									{weekday}
								</Typography>
							</th>
						))}
					</tr>
				</thead>
				<tbody className="manifest-calendar-table__body">
					{[...new Array(weeksInMonth).keys()].map((weekIndex) => (
						<tr className="manifest-calendar-table__row" key={weekIndex}>
							{state
								.getDatesInWeek(weekIndex, startDate)
								.map((date, i) =>
									date ? (
										<CalendarCell currentMonth={startDate} date={date} key={i} state={state} />
									) : (
										<td key={i} />
									),
								)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
