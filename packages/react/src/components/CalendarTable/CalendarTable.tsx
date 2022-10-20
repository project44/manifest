/* eslint-disable react/no-array-index-key */
import { useCalendarGrid } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import { endOfMonth, getWeeksInMonth } from '@internationalized/date';
import { cx } from '@project44-manifest/react-styles';
import { Typography } from '@project44-manifest/react-typography';
import { CalendarCell } from '../CalendarCell';
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

	// Array from does not work for what we need here.
	// eslint-disable-next-line unicorn/no-new-array
	const weeks = [...new Array(weeksInMonth).keys()];

	const { gridProps, headerProps, weekDays } = useCalendarGrid({ endDate, startDate }, state);

	const { className } = useStyles();

	return (
		<div className={cx(className, 'manifest-calendar-table')}>
			<table {...gridProps} className="manifest-calendar-table__table">
				<thead className="manifest-calendar-table__head" {...headerProps}>
					<tr className="manifest-calendar-table__row">
						{weekDays.map((weekday) => (
							<th key={weekday} className="manifest-calendar-table__column" scope="col">
								<Typography aria-hidden="true" variant="caption">
									{weekday}
								</Typography>
							</th>
						))}
					</tr>
				</thead>
				<tbody className="manifest-calendar-table__body">
					{weeks.map((weekIndex) => (
						<tr key={weekIndex} className="manifest-calendar-table__row">
							{state
								.getDatesInWeek(weekIndex, startDate)
								.map((date, i) =>
									date ? (
										<CalendarCell key={i} currentMonth={startDate} date={date} state={state} />
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
