import * as React from 'react';
import { DropdownContext } from './Dropdown.context';
import { Popover } from '../Popover';
import { PopoverContent } from '../PopoverContent';
import { UseDropdownOptions, useDropdown } from './useDropdown';
import { DropdownTrigger } from '../DropdownTrigger/DropdownTrigger';

interface DropdownProps extends UseDropdownOptions {
  /**
   * The contents of the Dropdown - a trigger and a Menu.
   */
  children: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = props => {
  const { children, ...other } = props;

  const context = useDropdown(other);

  const [menuTrigger, menu] = React.Children.toArray(children);

  return (
    <DropdownContext.Provider value={context}>
      <Popover
        {...context.popoverProps}
        isOpen={context.state.isOpen}
        onClose={context.state.close}
        placement={context.placement}
        ref={context.popoverRef}
        scrollRef={context.menuRef}
        triggerRef={context.triggerRef}
      >
        <DropdownTrigger>{menuTrigger}</DropdownTrigger>
        <PopoverContent>{menu}</PopoverContent>
      </Popover>
    </DropdownContext.Provider>
  );
};

if (__DEV__) {
  Dropdown.displayName = 'ManifestDropdown';
}

export { Dropdown };
export { DropdownProps };
