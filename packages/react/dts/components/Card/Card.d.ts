import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface CardProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card };
export type { CardProps };
//# sourceMappingURL=Card.d.ts.map