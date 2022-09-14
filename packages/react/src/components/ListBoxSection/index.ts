import { ListBoxSection as _ListBoxSection, ListBoxSectionProps } from './ListBoxSection';
import { Item } from '@react-stately/collections';

export const ListBoxSection = Item as (
  props: Omit<ListBoxSectionProps, 'isVirtualized' | 'item' | 'onAction'>,
) => JSX.Element;

export { _ListBoxSection };
export type { ListBoxSectionProps };
