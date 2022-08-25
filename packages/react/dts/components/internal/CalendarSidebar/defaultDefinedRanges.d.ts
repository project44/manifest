import { CalendarDate } from '@internationalized/date';
import { DefinedRange } from '../../../types';
export declare const defaultDate: Date;
export declare const defineds: {
    startOfWeek: Date;
    endOfWeek: Date;
    startOfLastWeek: Date;
    endOfLastWeek: Date;
    startOfToday: Date;
    endOfToday: Date;
    startOfYesterday: Date;
    endOfYesterday: Date;
    startOfMonth: Date;
    endOfMonth: Date;
    startOfLastMonth: Date;
    endOfLastMonth: Date;
};
export declare const createCalendarDate: (date: Date) => CalendarDate;
export declare const getDefaultRanges: () => DefinedRange[];
//# sourceMappingURL=defaultDefinedRanges.d.ts.map