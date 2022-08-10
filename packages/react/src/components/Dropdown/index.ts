import type { DropdownItemProps } from '../internal/DropdownItem';
import type { DropdownSectionProps } from '../internal/DropdownSection';
import { Item, Section } from '@react-stately/collections';

const DropdownItem = Item as (
  props: Omit<DropdownItemProps, 'item' | 'state' | 'onAction'>,
) => JSX.Element;
const DropdownSection = Section as (
  props: Omit<DropdownSectionProps, 'item' | 'state' | 'onAction'>,
) => JSX.Element;

export { DropdownItem, DropdownSection };
export { DropdownItemProps, DropdownSectionProps };

export * from './Dropdown';
export * from './Dropdown.context';
export * from './useDropdown';
