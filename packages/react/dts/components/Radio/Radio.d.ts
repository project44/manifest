import { DOMProps, StyleProps } from '../../types';
import type { AriaRadioProps } from '@react-types/radio';
import * as React from 'react';
interface RadioProps extends AriaRadioProps, DOMProps, StyleProps {
    chidlren?: React.ReactNode;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLLabelElement>>;
export { Radio };
export type { RadioProps };
//# sourceMappingURL=Radio.d.ts.map