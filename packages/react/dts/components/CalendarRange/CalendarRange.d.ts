import type { DefinedRange, StyleProps } from '../../types';
import type { RangeCalendarProps } from '@react-types/calendar';
import * as React from 'react';
import { DateValue } from '@internationalized/date';
export interface CalendarRangeProps extends RangeCalendarProps<DateValue>, StyleProps {
    showCalendar?: boolean;
    showRanges?: boolean;
    ranges?: DefinedRange[];
    as?: React.ElementType;
}
export declare const CalendarRange: import("@project44-manifest/system").Component<CalendarRangeProps>;
//# sourceMappingURL=CalendarRange.d.ts.map