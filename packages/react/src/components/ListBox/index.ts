import type { ItemProps } from '@react-types/shared';
import type { ManifestProps } from '../../types';
import { Item, Section } from '@react-stately/collections';

export interface ListBoxItemProps<T extends object = object> extends ManifestProps, ItemProps<T> {
  /**
   * Icon displayed at the end of the listbox item.
   *
   * @example
   * <ListBoxItem endIcon={<Icon />} />
   */
  endIcon?: React.ReactNode;
  /**
   * Icon displayed at the start of the listbox item.
   *
   * @example
   * <ListBoxItem startIcon={<Icon />} />
   */
  startIcon?: React.ReactElement;
}

export const ListBoxItem = Item as (props: ListBoxItemProps) => JSX.Element;

export * from './ListBox';

export { Section as ListBoxSection };
