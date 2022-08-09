import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { DropdownContext } from './Dropdown.context';
import { mergeProps } from '@react-aria/utils';
import { PressResponder } from '@react-aria/interactions';
import { Popover } from '../Popover';
import { useMenuTrigger } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';
import { useOverlayPosition } from '@react-aria/overlays';

interface DropdownProps {
  /**
   * Alignment of the menu relative to the trigger.
   *
   * @default 'start'
   */
  align?: 'end' | 'start';
  /**
   * The contents of the MenuTrigger - a trigger and a Menu.
   */
  children: React.ReactElement[];
  /**
   * Whether the dropdown closes when a selection is made.
   *
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Where the Menu opens relative to its trigger.
   *
   * @default 'bottom'
   */
  direction?: 'bottom' | 'top' | 'left' | 'right' | 'start' | 'end';
}

const Dropdown: React.FC<DropdownProps> = props => {
  const { align = 'start', children, closeOnSelect = true, direction = 'bottom' } = props;

  const menuRef = React.useRef<HTMLUListElement>(null);
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const [menuTrigger, menu] = React.Children.toArray(children);

  let initialPlacement: Placement;

  switch (direction) {
    case 'left':
    case 'right':
    case 'start':
    case 'end':
      initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}` as Placement;
      break;
    case 'bottom':
    case 'top':
    default:
      initialPlacement = `${direction} ${align}` as Placement;
  }

  const state = useMenuTriggerState(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { trigger: 'press' },
    state,
    menuTriggerRef,
  );

  const { overlayProps: positionProps, placement } = useOverlayPosition({
    targetRef: menuTriggerRef,
    overlayRef: popoverRef,
    scrollRef: menuRef,
    offset: 4,
    placement: initialPlacement,
    shouldFlip: true,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  return (
    <DropdownContext.Provider
      value={{
        closeOnSelect,
        menuProps: mergeProps(menuProps, { autoFocus: state.focusStrategy || true }),
        menuRef,
        onClose: state.close,
      }}
    >
      <PressResponder {...menuTriggerProps} ref={menuTriggerRef} isPressed={state.isOpen}>
        {menuTrigger}
      </PressResponder>
      <Popover
        isOpen={state.isOpen}
        onClose={state.close}
        placement={placement}
        ref={popoverRef}
        style={positionProps.style ?? {}}
      >
        {menu}
      </Popover>
    </DropdownContext.Provider>
  );
};

if (__DEV__) {
  Dropdown.displayName = 'ManifestDropdown';
}

export { Dropdown };
export { DropdownProps };
