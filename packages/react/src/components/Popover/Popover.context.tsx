import type { AriaButtonProps } from '@react-types/button';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { Placement } from '@react-types/overlays';
import * as React from 'react';

export interface PopoverContext {
  hasTriggerRefProp?: boolean;
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  isNonModal?: boolean;
  isOpen?: boolean;
  overlayProps: React.HTMLAttributes<HTMLDivElement>;
  overlayRef: React.RefObject<HTMLDivElement>;
  placement?: Placement;
  positionProps: React.HTMLAttributes<Element>;
  shouldCloseOnBlur?: boolean;
  state: OverlayTriggerState;
  triggerProps: AriaButtonProps;
  triggerRef: React.RefObject<HTMLButtonElement>;
  onClose?(): void;
  onEntered?(): void;
  onExited?(): void;
  shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}

export const PopoverContext = React.createContext<PopoverContext | null>(null);

export const usePopoverContext = () => React.useContext(PopoverContext);
