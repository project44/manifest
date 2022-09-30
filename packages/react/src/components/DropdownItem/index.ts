import { Item } from '@react-stately/collections';
import type { DropdownItemProps } from './DropdownItem';
import { DropdownItem as DROPDOWN_ITEM } from './DropdownItem';

export const DropdownItem = Item as (
	props: Omit<DropdownItemProps, 'item' | 'onAction' | 'state'>,
) => JSX.Element;

export { DROPDOWN_ITEM };
export type { DropdownItemProps };
