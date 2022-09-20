import { ListBoxItem as _ListBoxItem, ListBoxItemProps, ListBoxItemOptions } from './ListBoxItem';
import { Item } from '@react-stately/collections';

export const ListBoxItem = Item as (props: ListBoxItemProps) => JSX.Element;

export type { ListBoxItemProps, ListBoxItemOptions };
export { _ListBoxItem };
