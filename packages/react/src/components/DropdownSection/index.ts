import { Section } from '@react-stately/collections';
import type { DropdownSectionProps } from './DropdownSection.types';

export const DropdownSection = Section as (props: DropdownSectionProps) => JSX.Element;

export { DropdownSection as DROPDOWN_SECTION } from './DropdownSection';
export type { DropdownSectionProps };
