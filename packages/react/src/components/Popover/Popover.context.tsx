import type { PlacementAxis } from '@react-types/overlays';
import * as React from 'react';

export interface PopoverContext {
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  isOpen?: boolean;
  isNonModal?: boolean;
  placement?: PlacementAxis;
  shouldCloseOnBlur?: boolean;
  shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
  onClose?(): void;
}

export const PopoverContext = React.createContext<PopoverContext | null>(null);

export const usePopover = () => React.useContext(PopoverContext);
