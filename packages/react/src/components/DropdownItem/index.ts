import type { DropdownItemProps } from './DropdownItem';
import { DropdownItem as _DropdownItem } from './DropdownItem';
import { Item } from '@react-stately/collections';

export const DropdownItem = Item as (
  props: Omit<DropdownItemProps, 'item' | 'state' | 'onAction'>,
) => JSX.Element;

export { _DropdownItem };
export type { DropdownItemProps };
