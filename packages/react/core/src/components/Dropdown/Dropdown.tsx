import * as React from 'react';
import { useMenuTrigger } from '@react-aria/menu';
import { mergeProps } from '@react-aria/utils';
import { useMenuTriggerState } from '@react-stately/menu';
import type { MenuTriggerType } from '@react-types/menu';
import { Overlay, Placement, useOverlayPosition } from '@project44-manifest/react-overlay';
import { Popover } from '@project44-manifest/react-popover';
import { Slot } from '@radix-ui/react-slot';
import { DropdownContext } from './Dropdown.context';

export interface DropdownProps {
  /**
   * The contents of the MenuTrigger - a trigger and a Menu.
   */
  children: React.ReactNode[];
  /**
   * Whether the dropdown closes when a selection is made.
   *
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Whether the overlay is open by default (uncontrolled).
   */
  defaultOpen?: boolean;
  /**
   * Whether menu trigger is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the overlay is open by default (controlled).
   */
  isOpen?: boolean;
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   *
   * @default 4
   */
  offset?: number;
  /** Handler that is called when the overlay's open state changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * How the menu is triggered.
   *
   * @default 'press'
   */
  trigger?: MenuTriggerType;
  /**
   * The type of menu that the menu trigger opens.
   *
   * @default 'menu'
   */
  type?: 'listbox' | 'menu';
}

export function Dropdown(props: DropdownProps) {
  const {
    children,
    closeOnSelect,
    offset = 4,
    placement = 'bottom start',
    shouldFlip,
    trigger = 'press',
    type = 'menu',
    ...other
  } = props;

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const [menuTrigger, menu] = React.Children.toArray(children) as [
    React.ReactElement,
    React.ReactNode,
  ];

  const state = useMenuTriggerState(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger({ trigger, type }, state, triggerRef);

  const { overlayProps } = useOverlayPosition({
    isOpen: state.isOpen,
    offset,
    onClose: state.close,
    overlayRef: popoverRef,
    placement,
    shouldFlip,
    targetRef: triggerRef,
  });

  const handleClose = React.useCallback(() => void state.close(), [state]);

  const context = React.useMemo(
    () => ({
      closeOnSelect,
      menuProps: mergeProps(menuProps, { autoFocus: state.focusStrategy || true }),
      menuRef,
      onClose: handleClose,
    }),
    [closeOnSelect, handleClose, menuProps, menuRef, state.focusStrategy],
  );

  return (
    <DropdownContext.Provider value={context}>
      <Slot {...menuTriggerProps} ref={triggerRef}>
        {menuTrigger}
      </Slot>
      <Overlay isOpen={state.isOpen}>
        <Popover
          {...mergeProps(overlayProps, other)}
          ref={popoverRef}
          isOpen={state.isOpen}
          onClose={handleClose}
        >
          {menu}
        </Popover>
      </Overlay>
    </DropdownContext.Provider>
  );
}
