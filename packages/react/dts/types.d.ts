import type { CSSProperties } from 'react';
import { CalendarDate } from '@internationalized/date';
import { CSS } from './styles';
export interface DOMProps {
    id?: string;
}
export interface StyleProps {
    className?: string;
    css?: CSS;
    style?: CSSProperties;
}
export interface RangeAnchor {
    start: CalendarDate;
    end: CalendarDate;
}
export interface DefinedRange {
    key: string;
    label: string;
    rangeAnchor: RangeAnchor;
}
export interface DefaultRanges {
    today: {
        label: string;
        key: string;
    };
    yesterday: {
        label: string;
        key: string;
    };
    thisWeek: {
        label: string;
        key: string;
    };
    lastWeek: {
        label: string;
        key: string;
    };
    thisMonth: {
        label: string;
        key: string;
    };
    lastMonth: {
        label: string;
        key: string;
    };
}
//# sourceMappingURL=types.d.ts.map