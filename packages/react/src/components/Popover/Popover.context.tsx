import type { AriaButtonProps } from '@react-types/button';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { PlacementAxis } from '@react-types/overlays';
import * as React from 'react';

export interface PopoverContext {
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  isOpen?: boolean;
  isNonModal?: boolean;
  overlayProps: React.HTMLAttributes<HTMLDivElement>;
  overlayRef: React.RefObject<HTMLDivElement>;
  placement?: PlacementAxis;
  positionProps: React.HTMLAttributes<Element>;
  shouldCloseOnBlur?: boolean;
  state: OverlayTriggerState;
  triggerProps: AriaButtonProps;
  triggerRef: React.RefObject<HTMLElement>;
  onClose?(): void;
  shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}

export const PopoverContext = React.createContext<PopoverContext | null>(null);

export const usePopover = () => React.useContext(PopoverContext);
