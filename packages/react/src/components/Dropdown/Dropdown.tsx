import type { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { DropdownContext, Align, Placement } from './Dropdown.context';

export interface DropdownProps {
  /**
   * Alignment of the dropdown in relation to its trigger.
   *
   * @default `start`
   */
  align?: Align;
  /**
   * Whether the dropdown is open.
   */
  isOpen?: boolean;
  /**
   * The offset of the dropdown in relation to its trigger.
   *
   * @default '[0, 4]'
   */
  offset?: [crossAxis: number, mainAxis: number];
  /**
   * Placement of the dropdown in relation to its trigger.
   *
   * @default `bottom`
   */
  placement?: Placement;
  /**
   * Callback fired when a click or focus event is register outside the dropdown.
   */
  onOutsideClick?(event: FocusOutsideEvent | PointerDownOutsideEvent): void;
  /**
   * Callback fired when the dropdown is closed.
   */
  onEscapeKeyDown?(event: KeyboardEvent): void;
  /**
   * Callback fired when the dropdown open state changes.
   */
  onOpenChange?(isOpen: boolean): void;
}

export const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> = props => {
  const {
    align = 'start',
    children,
    isOpen,
    offset = [0, 4],
    placement = 'bottom',
    onOpenChange,
    onEscapeKeyDown,
    onOutsideClick,
  } = props;

  return (
    <DropdownPrimitive.Root dir="ltr" open={isOpen} onOpenChange={onOpenChange}>
      <DropdownContext.Provider
        value={{ align, offset, onEscapeKeyDown, onOutsideClick, placement }}
      >
        {children}
      </DropdownContext.Provider>
    </DropdownPrimitive.Root>
  );
};
