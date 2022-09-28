import type { ListBoxItemProps } from '../ListBoxItem';
import { Item } from '@react-stately/collections';

export const ComboboxItem = Item as (props: ComboboxItemProps) => JSX.Element;

export type ComboboxItemProps = ListBoxItemProps;
