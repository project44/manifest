import { Section } from '@react-stately/collections';
import type { ListBoxSectionProps } from '../ListBoxSection';

export const SelectSection = Section as (props: SelectSectionProps) => JSX.Element;

export type SelectSectionProps = ListBoxSectionProps;
