import { Section } from '@react-stately/collections';
import type { ListBoxSectionProps } from '../ListBoxSection';

export const ComboboxSection = Section as (props: ComboboxSectionProps) => JSX.Element;

export type ComboboxSectionProps = ListBoxSectionProps;
