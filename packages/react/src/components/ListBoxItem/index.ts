import { Item } from '@react-stately/collections';
import { ListBoxItemProps } from './ListBoxItem';

export const ListBoxItem = Item as (props: ListBoxItemProps) => JSX.Element;

export {
  type ListBoxItemOptions,
  type ListBoxItemProps,
  ListBoxItem as LIST_BOX_ITEM,
} from './ListBoxItem';
