import type { DOMProps, StyleProps } from '../../types';
import type { AriaCheckboxProps } from '@react-types/checkbox';
import * as React from 'react';
interface CheckboxProps extends AriaCheckboxProps, DOMProps, StyleProps {
    chidlren?: React.ReactNode;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLLabelElement>>;
export { Checkbox };
export type { CheckboxProps };
//# sourceMappingURL=Checkbox.d.ts.map