import { Section } from '@react-stately/collections';
import type { DropdownSectionProps } from './DropdownSection';

export const DropdownSection = Section as (props: DropdownSectionProps) => JSX.Element;

export { type DropdownSectionProps, DropdownSection as DROPDOWN_SECTION } from './DropdownSection';
