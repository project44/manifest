import type { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { Align, Placement, PopoverContext } from './Popover.context';

export interface PopoverProps {
  /**
   * Alignment of the menu in relation to its trigger.
   *
   * @default `center`
   */
  align?: Align;
  /**
   * The offset of the menu in relation to its trigger.
   *
   * @default '[0, 4]'
   */
  offset?: [crossAxis: number, mainAxis: number];
  /**
   * Placement of the menu in relation to its trigger.
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
  /**
   * Whether the popover is open.
   */
  isOpen?: boolean;
  /**
   * Callback fired when the popover state changes.
   */
  onChange?(isOpen: boolean): void;
}

export const Popover: React.FC<React.PropsWithChildren<PopoverProps>> = props => {
  const {
    align = 'center',
    children,
    isOpen,
    offset = [0, 4],
    placement = 'bottom',
    onChange,
    onEscapeKeyDown,
    onOutsideClick,
  } = props;

  return (
    <PopoverPrimitive.Root open={isOpen} onOpenChange={onChange}>
      <PopoverContext.Provider
        value={{
          align,
          offset,
          onEscapeKeyDown,
          onOutsideClick,
          placement,
        }}
      >
        {children}
      </PopoverContext.Provider>
    </PopoverPrimitive.Root>
  );
};

Popover.displayName = 'Popover';
