import * as React from 'react';
import type { OverlayTriggerState } from '@react-stately/overlays';
import { createContext } from '@project44-manifest/react-utils';

export interface PopoverContext {
  state: OverlayTriggerState;
  triggerRef: React.RefObject<Element>;
}

export const [PopoverProvider, usePopoverContext] = createContext<PopoverContext>({
  name: 'PopoverContext',
});
