import { ListBoxItem as _ListBoxItem, ListBoxItemProps } from './ListBoxItem';
import { Item } from '@react-stately/collections';

export const ListBoxItem = Item as (
  props: Omit<ListBoxItemProps, 'isVirtualized' | 'item' | 'onAction'>,
) => JSX.Element;

export { _ListBoxItem };
export type { ListBoxItemProps };
