import type { StyleProps } from '../../types';
import type { AriaDatePickerProps } from '@react-types/datepicker';
import * as React from 'react';
import { DateValue } from '../Calendar';
export interface DatePickerProps extends AriaDatePickerProps<DateValue>, StyleProps {
    helperText?: React.ReactNode;
    helperTextProps?: React.HTMLAttributes<HTMLElement>;
    label?: React.ReactNode;
    labelProps?: React.HTMLAttributes<HTMLElement>;
    placeholder?: string;
    size?: 'medium' | 'small';
    startIcon?: React.ReactElement;
}
export declare const DatePicker: import("@project44-manifest/system").Component<DatePickerProps>;
//# sourceMappingURL=DatePicker.d.ts.map