import type { DOMProps, StyleProps } from '../../types';
import type { Placement } from '@react-types/overlays';
import * as React from 'react';
interface PopoverProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
    isDismissable?: boolean;
    isKeyboardDismissDisabled?: boolean;
    isOpen?: boolean;
    isNonModal?: boolean;
    offset?: number;
    overlayProps?: React.HTMLAttributes<HTMLDivElement>;
    overlayRef: React.RefObject<HTMLDivElement>;
    placement?: Placement;
    scrollRef?: React.RefObject<HTMLElement>;
    shouldCloseOnBlur?: boolean;
    shouldFlip?: boolean;
    triggerRef: React.RefObject<HTMLElement>;
    type?: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
    onClose?(): void;
    onEntered?(): void;
    onExited?(): void;
    shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
export type { PopoverProps };
//# sourceMappingURL=Popover.d.ts.map