import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface FlexProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
    align?: 'baseline' | 'center' | 'end' | 'start';
    justify?: 'around' | 'between' | 'center' | 'end' | 'start';
    orientation?: 'horizontal' | 'vertical';
    wrap?: boolean;
}
declare const Flex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
export { Flex };
export type { FlexProps };
//# sourceMappingURL=Flex.d.ts.map