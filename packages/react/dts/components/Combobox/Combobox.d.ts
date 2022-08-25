import type { DOMProps, StyleProps } from '../../types';
import type { AriaComboBoxProps } from '@react-types/combobox';
import * as React from 'react';
interface ComboboxProps extends AriaComboBoxProps<object>, DOMProps, StyleProps {
    helperText?: React.ReactNode;
    helperTextProps?: React.HTMLAttributes<HTMLElement>;
    label?: React.ReactNode;
    labelProps?: React.HTMLAttributes<HTMLElement>;
    size?: 'medium' | 'small';
    startIcon?: React.ReactElement;
}
declare const Combobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLDivElement>>;
export { Combobox };
export type { ComboboxProps };
//# sourceMappingURL=Combobox.d.ts.map