import type { TreeState } from '@react-stately/tree';
import type { FocusableProps, ItemProps, Node } from '@react-types/shared';
import type { CSS } from '@project44-manifest/react-styles';

export type DropdownItemElement = 'li';

export interface DropdownItemOptions extends FocusableProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Whether the item is virtualized.
   */
  isVirtualized?: boolean;
  /**
   * Item object in the collection.
   */
  item: Node<object>;
  /**
   * Callback executed on item select.
   */
  onAction?: (key: React.Key) => void;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
  /**
   * Collection state.
   */
  state: TreeState<object>;
}

export interface DropdownItemProps
  extends ItemProps<object>,
    Omit<DropdownItemOptions, 'isVirtualized' | 'item' | 'state'> {}
