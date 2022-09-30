import { Section } from '@react-stately/collections';
import {
	ListBoxSection as LIST_BOX_SECTION,
	ListBoxSectionOptions,
	ListBoxSectionProps,
} from './ListBoxSection';

export const ListBoxSection = Section as (props: Omit<ListBoxSectionProps, 'item'>) => JSX.Element;

export type { ListBoxSectionOptions, ListBoxSectionProps };
export { LIST_BOX_SECTION };
