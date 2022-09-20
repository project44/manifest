import type { DropdownSectionProps } from './DropdownSection';
import { DropdownSection as _DropdownSection } from './DropdownSection';
import { Section } from '@react-stately/collections';

export const DropdownSection = Section as (props: DropdownSectionProps) => JSX.Element;

export { _DropdownSection };
export type { DropdownSectionProps };
