import type { ListBoxSectionProps, ListBoxSectionOptions } from '../ListBoxSection';
import { Section } from '@react-stately/collections';

export const ComboboxSection = Section as (
  props: Omit<ListBoxSectionOptions & { children: React.ReactNode }, 'item' | 'onAction'>,
) => JSX.Element;

export type ComboboxSectionProps = ListBoxSectionProps;
