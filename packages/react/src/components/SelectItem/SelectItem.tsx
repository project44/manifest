import type { ListBoxItemProps } from '../ListBoxItem';
import { Item } from '@react-stately/collections';

export const SelectItem = Item as (props: SelectItemProps) => JSX.Element;

export type SelectItemProps = ListBoxItemProps;
