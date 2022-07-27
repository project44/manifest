import type { ListBoxItemProps } from '../internal/ListBoxItem';
import type { ListBoxSectionProps } from '../internal/ListBoxSection';
import { Item, Section } from '@react-stately/collections';

const ListBoxItem = Item as (
  props: Omit<ListBoxItemProps, 'isVirtualized' | 'item' | 'onAction'>,
) => JSX.Element;
const ListBoxSection = Section as (props: Omit<ListBoxSectionProps, 'item'>) => JSX.Element;

export { ListBoxItem, ListBoxSection };
export { ListBoxItemProps, ListBoxSectionProps };

export * from './ListBox';
