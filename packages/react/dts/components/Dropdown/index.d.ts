import type { DropdownItemProps } from '../internal/DropdownItem';
import type { DropdownSectionProps } from '../internal/DropdownSection';
declare const DropdownItem: (props: Omit<DropdownItemProps, 'item' | 'state' | 'onAction'>) => JSX.Element;
declare const DropdownSection: (props: Omit<DropdownSectionProps, 'item' | 'state' | 'onAction'>) => JSX.Element;
export { DropdownItem, DropdownSection };
export { DropdownItemProps, DropdownSectionProps };
export * from './Dropdown';
export * from './Dropdown.context';
//# sourceMappingURL=index.d.ts.map