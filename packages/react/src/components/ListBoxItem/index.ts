import { ListBoxItem as _ListBoxItem, ListBoxItemProps, ListBoxItemOptions } from './ListBoxItem';
import { Item } from '@react-stately/collections';

export const ListBoxItem = Item as (
  props: Omit<ListBoxItemProps, 'isVirtualized' | 'item' | 'onAction'>,
) => JSX.Element;

export type { ListBoxItemProps, ListBoxItemOptions };
export { _ListBoxItem };
