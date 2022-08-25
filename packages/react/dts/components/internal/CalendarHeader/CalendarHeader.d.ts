/// <reference types="react" />
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import { IconButtonProps } from '../../IconButton';
interface CalendarHeaderProps {
    nextButtonProps: IconButtonProps;
    prevButtonProps: IconButtonProps;
    state: CalendarState | RangeCalendarState;
}
declare function CalendarHeader(props: CalendarHeaderProps): JSX.Element;
export { CalendarHeader };
//# sourceMappingURL=CalendarHeader.d.ts.map