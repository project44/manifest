import type { DOMProps, StyleProps } from '../../types';
import type { AriaSwitchProps } from '@react-types/switch';
import * as React from 'react';
interface SwitchProps extends AriaSwitchProps, DOMProps, StyleProps {
    chidlren?: React.ReactNode;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLLabelElement>>;
export { Switch };
export type { SwitchProps };
//# sourceMappingURL=Switch.d.ts.map