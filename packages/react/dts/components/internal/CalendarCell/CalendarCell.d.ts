/// <reference types="react" />
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import type { CalendarDate } from '@internationalized/date';
interface CalendarCellProps {
    currentMonth: CalendarDate;
    date: CalendarDate;
    state: CalendarState | RangeCalendarState;
}
declare function CalendarCell(props: CalendarCellProps): JSX.Element;
export { CalendarCell };
//# sourceMappingURL=CalendarCell.d.ts.map