import { Item } from '@react-stately/collections';
import type { ListBoxItemProps } from '../ListBoxItem';

export const ComboboxItem = Item as (props: ComboboxItemProps) => JSX.Element;

export type ComboboxItemProps = ListBoxItemProps;
