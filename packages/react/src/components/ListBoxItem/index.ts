import { Item } from '@react-stately/collections';
import { ListBoxItem as LIST_BOX_ITEM, ListBoxItemOptions, ListBoxItemProps } from './ListBoxItem';

export const ListBoxItem = Item as (props: ListBoxItemProps) => JSX.Element;

export type { ListBoxItemOptions, ListBoxItemProps };
export { LIST_BOX_ITEM };
