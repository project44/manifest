import * as React from 'react';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { ButtonProps } from '@project44-manifest/react-button';
import type { DOMAttributes } from '@project44-manifest/react-types';
import { createContext } from '@project44-manifest/react-utils';

export interface PopoverContext {
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  isNonModal?: boolean;
  onClose: () => void;
  overlayProps: DOMAttributes;
  overlayRef: React.RefObject<HTMLDivElement>;
  shouldCloseOnBlur?: boolean;
  shouldCloseOnInteractOutside?: (element: Element) => boolean;
  state: OverlayTriggerState;
  triggerProps: ButtonProps;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export const [PopoverProvider, usePopoverContext] = createContext<PopoverContext>({
  name: 'PopoverContext',
});
