import type { ListBoxSectionProps } from '../ListBoxSection';
import { Section } from '@react-stately/collections';

export const SelectSection = Section as (props: SelectSectionProps) => JSX.Element;

export type SelectSectionProps = ListBoxSectionProps;
