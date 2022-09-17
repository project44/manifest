import type { ListBoxSectionProps, ListBoxSectionOptions } from '../ListBoxSection';
import { Section } from '@react-stately/collections';

export const SelectSection = Section as (
  props: Omit<ListBoxSectionOptions & { children: React.ReactNode }, 'item' | 'onAction'>,
) => JSX.Element;

export type SelectSectionProps = ListBoxSectionProps;
