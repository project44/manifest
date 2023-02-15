import { Item } from '@react-stately/collections';
import type { DropdownItemProps } from './DropdownItem.types';

export const DropdownItem = Item as (
  props: Omit<DropdownItemProps, 'item' | 'onAction' | 'state'>,
) => JSX.Element;

export { DropdownItem as DROPDOWN_ITEM } from './DropdownItem';
export type { DropdownItemProps };
