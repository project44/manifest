import type { Placement } from '@react-types/overlays';
import * as React from 'react';
export interface PopoverContext {
    isDismissable?: boolean;
    isKeyboardDismissDisabled?: boolean;
    isNonModal?: boolean;
    isOpen?: boolean;
    overlayProps?: React.HTMLAttributes<HTMLDivElement>;
    overlayRef: React.RefObject<HTMLDivElement>;
    placement?: Placement;
    positionProps: React.HTMLAttributes<Element>;
    shouldCloseOnBlur?: boolean;
    onClose?(): void;
    onEntered?(): void;
    onExited?(): void;
    shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}
export declare const PopoverContext: React.Context<PopoverContext | null>;
export declare const usePopoverContext: () => PopoverContext | null;
//# sourceMappingURL=Popover.context.d.ts.map