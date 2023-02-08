import { Section } from '@react-stately/collections';
import { ListBoxSectionProps } from './ListBoxSection';

export const ListBoxSection = Section as (props: Omit<ListBoxSectionProps, 'item'>) => JSX.Element;

export {
  type ListBoxSectionOptions,
  type ListBoxSectionProps,
  ListBoxSection as LIST_BOX_SECTION,
} from './ListBoxSection';
