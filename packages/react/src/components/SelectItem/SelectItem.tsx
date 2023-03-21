import { Item } from '@react-stately/collections';
import type { ListBoxItemProps } from '../ListBoxItem';

export const SelectItem = Item as (props: SelectItemProps) => JSX.Element;

export type SelectItemProps = ListBoxItemProps;
