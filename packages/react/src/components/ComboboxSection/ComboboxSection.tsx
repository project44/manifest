import type { ListBoxSectionProps } from '../ListBoxSection';
import { Section } from '@react-stately/collections';

export const ComboboxSection = Section as (props: ComboboxSectionProps) => JSX.Element;

export type ComboboxSectionProps = ListBoxSectionProps;
