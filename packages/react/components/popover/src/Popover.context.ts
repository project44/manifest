import * as React from 'react';
import type { OverlayTriggerState } from '@project44-manifest/react-overlay';
import { createContext } from '@project44-manifest/react-utils';

export interface PopoverContext {
  state: OverlayTriggerState;
  triggerRef: React.RefObject<Element>;
}

export const [PopoverProvider, usePopoverContext] = createContext<PopoverContext>({
  name: 'PopoverContext',
});
