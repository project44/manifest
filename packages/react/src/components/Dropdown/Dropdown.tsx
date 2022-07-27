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
   * Whether the dropdown closes when a selection is made.
   *
   * @default true
   */
  closeOnSelect?: boolean;
}

const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> = props => {
  const { children, closeOnSelect = true } = props;

  const menuRef = React.useRef<HTMLUListElement>(null);
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const [menuTrigger, menu] = React.Children.toArray(children);

  const state = useMenuTriggerState(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { trigger: 'press' },
    state,
    menuTriggerRef,
  );

  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: menuTriggerRef,
    overlayRef,
    scrollRef: menuRef,
    offset: 4,
    placement: 'bottom start',
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
      }}
    >
      <PressResponder {...menuTriggerProps} ref={menuTriggerRef} isPressed={state.isOpen}>
        {menuTrigger}
      </PressResponder>
      <Popover {...positionProps} isOpen={state.isOpen} onClose={state.close} ref={overlayRef}>
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
