/// <reference types="react" />
import type { RangeCalendarState } from '@react-stately/calendar';
import { DefinedRange } from '../../../types';
interface CalendarSideBarProps {
    state: RangeCalendarState;
    ranges: DefinedRange[];
    onChange?: () => void;
}
declare function CalendarSidebar(props: CalendarSideBarProps): JSX.Element;
export { CalendarSidebar };
//# sourceMappingURL=CalendarSidebar.d.ts.map