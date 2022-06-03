import * as React from 'react';
import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer';

export type Align = 'center' | 'end' | 'start';
export type Placement = 'bottom' | 'left' | 'right' | 'top';

export interface PopoverContext {
  align?: Align;
  offset?: [crossAxis: number, mainAxis: number];
  placement?: Placement;
  onOutsideClick?(event: FocusOutsideEvent | PointerDownOutsideEvent): void;
  onEscapeKeyDown?(event: KeyboardEvent): void;
}

export const PopoverContext = React.createContext<PopoverContext>({});

export const usePopoverContext = () => React.useContext(PopoverContext);
