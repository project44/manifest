import type { DefinedRange, DOMProps, StyleProps } from '../../types';
import type { AriaDateRangePickerProps } from '@react-types/datepicker';
import type { DateValue } from '../Calendar';
import * as React from 'react';
interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue>, DOMProps, StyleProps {
    helperText?: React.ReactNode;
    helperTextProps?: React.HTMLAttributes<HTMLElement>;
    label?: React.ReactNode;
    labelProps?: React.HTMLAttributes<HTMLElement>;
    placeholder?: string;
    size?: 'medium' | 'small';
    startIcon?: React.ReactElement;
    showCalendar?: boolean;
    showRanges?: boolean;
    ranges?: DefinedRange[];
}
declare const DateRangePicker: React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLDivElement>>;
export { DateRangePicker };
export type { DateRangePickerProps };
//# sourceMappingURL=DateRangePicker.d.ts.map