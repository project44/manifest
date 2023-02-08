import { Item } from '@react-stately/collections';
import type { DropdownItemProps } from './DropdownItem';

export const DropdownItem = Item as (
  props: Omit<DropdownItemProps, 'item' | 'onAction' | 'state'>,
) => JSX.Element;

export { type DropdownItemProps, DropdownItem as DROPDOWN_ITEM } from './DropdownItem';
