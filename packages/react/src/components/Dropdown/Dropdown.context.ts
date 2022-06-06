import type { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer';
import * as React from 'react';

export type Align = 'center' | 'end' | 'start';
export type Placement = 'bottom' | 'left' | 'right' | 'top';

export interface DropdownContextOptions {
  /**
   * Alignment of the dropdown in relation to its trigger.
   *
   * @default `center`
   */
  align?: Align;
  /**
   * The offset of the dropdown in relation to its trigger.
   */
  offset?: [crossAxis: number, mainAxis: number];
  /**
   * Placement of the dropdown in relation to its trigger.
   *
   * @default `bottom`
   */
  placement?: Placement;
  /**
   * Callback fired when a click or focus event is register outside the dialog.
   */
  onOutsideClick?(event: FocusOutsideEvent | PointerDownOutsideEvent): void;
  /**
   * Callback fired when the dialog is closed.
   */
  onEscapeKeyDown?(event: KeyboardEvent): void;
}

export const DropdownContext = React.createContext<DropdownContextOptions>({});

export const useDropdownContext = () => React.useContext(DropdownContext);
