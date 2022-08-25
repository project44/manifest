import { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface PillProps extends DOMProps, StyleProps {
    colorScheme?: 'indigo' | 'red';
    icon?: React.ReactNode;
    isCollapsible?: boolean;
    label?: React.ReactNode;
}
declare const Pill: React.ForwardRefExoticComponent<PillProps & React.RefAttributes<HTMLDivElement>>;
export { Pill };
export type { PillProps };
//# sourceMappingURL=Pill.d.ts.map