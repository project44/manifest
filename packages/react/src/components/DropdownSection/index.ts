import { Section } from '@react-stately/collections';
import type { DropdownSectionProps } from './DropdownSection';
import { DropdownSection as DROPDOWN_SECTION } from './DropdownSection';

export const DropdownSection = Section as (props: DropdownSectionProps) => JSX.Element;

export { DROPDOWN_SECTION };
export type { DropdownSectionProps };
