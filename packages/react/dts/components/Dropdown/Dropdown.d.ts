import type { MenuTriggerType } from '@react-types/menu';
import * as React from 'react';
import { PopoverProps } from '../Popover';
interface DropdownProps extends Omit<PopoverProps, 'overlayRef' | 'scrollRef' | 'triggerRef'> {
    children: React.ReactNode[];
    align?: 'end' | 'start';
    closeOnSelect?: boolean;
    direction?: 'bottom' | 'top' | 'left' | 'right' | 'start' | 'end';
    isDisabled?: boolean;
    trigger?: MenuTriggerType;
    type?: 'menu' | 'listbox';
}
declare const Dropdown: React.FC<DropdownProps>;
export { Dropdown };
export { DropdownProps };
//# sourceMappingURL=Dropdown.d.ts.map