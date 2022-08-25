import type { DOMProps, StyleProps } from '../../types';
import type { OverlayTriggerProps } from '@react-types/overlays';
import * as React from 'react';
interface TooltipProps extends OverlayTriggerProps, DOMProps, StyleProps {
    children?: React.ReactNode;
    isDisabled?: boolean;
    placement?: 'start' | 'end' | 'right' | 'left' | 'top' | 'bottom';
    title?: React.ReactNode;
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export { Tooltip };
export type { TooltipProps };
//# sourceMappingURL=Tooltip.d.ts.map