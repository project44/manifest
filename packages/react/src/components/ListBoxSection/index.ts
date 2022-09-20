import {
  ListBoxSection as _ListBoxSection,
  ListBoxSectionProps,
  ListBoxSectionOptions,
} from './ListBoxSection';
import { Section } from '@react-stately/collections';

export const ListBoxSection = Section as (props: Omit<ListBoxSectionProps, 'item'>) => JSX.Element;

export type { ListBoxSectionProps, ListBoxSectionOptions };
export { _ListBoxSection };
