import type { DOMProps, StyleProps } from '../../types';
import type { Validation } from '@react-types/shared';
import * as React from 'react';
interface FormControlProps extends DOMProps, StyleProps, Validation {
    children?: React.ReactNode;
    helperText?: React.ReactNode;
    helperTextProps?: React.HTMLAttributes<HTMLElement>;
    label?: React.ReactNode;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
    orientation?: 'horizontal' | 'vertical';
}
declare const FormControl: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLDivElement>>;
export { FormControl };
export type { FormControlProps };
//# sourceMappingURL=FormControl.d.ts.map