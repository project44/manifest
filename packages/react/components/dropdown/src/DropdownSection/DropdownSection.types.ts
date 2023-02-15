import type { TreeState } from '@react-stately/tree';
import type { Node, SectionProps } from '@react-types/shared';
import type { CSS } from '@project44-manifest/react-styles';

export type DropdownSectionElement = 'li';

export interface DropdownSectionOptions {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Item object in the collection.
   */
  item: Node<object>;
  /**
   * Tree state of the collection.
   */
  state: TreeState<object>;
  /**
   * The section label.
   */
  title?: React.ReactNode;
  /**
   * Callback executed on item select.
   */
  onAction?: (key: React.Key) => void;
}

export interface DropdownSectionProps
  extends SectionProps<object>,
    Omit<DropdownSectionOptions, 'item' | 'state'> {}
