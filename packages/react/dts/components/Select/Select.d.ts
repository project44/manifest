import type { DOMProps, StyleProps } from '../../types';
import type { AriaSelectProps } from '@react-types/select';
import * as React from 'react';
interface SelectProps extends AriaSelectProps<object>, DOMProps, StyleProps {
    helperText?: React.ReactNode;
    helperTextProps?: React.HTMLAttributes<HTMLElement>;
    label?: React.ReactNode;
    labelProps?: React.HTMLAttributes<HTMLElement>;
    size?: 'medium' | 'small';
    startIcon?: React.ReactElement;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export { Select };
export type { SelectProps };
//# sourceMappingURL=Select.d.ts.map