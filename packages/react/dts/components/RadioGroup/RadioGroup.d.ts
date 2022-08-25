import { DOMProps, StyleProps } from '../../types';
import type { AriaRadioGroupProps } from '@react-types/radio';
import * as React from 'react';
interface RadioGroupProps extends AriaRadioGroupProps, DOMProps, StyleProps {
    children?: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
}
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export { RadioGroup };
export type { RadioGroupProps };
//# sourceMappingURL=RadioGroup.d.ts.map