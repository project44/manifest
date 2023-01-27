import type { CSS } from '@project44-manifest/react-styles';

export type MenuItemElement = 'li';

export interface MenuItemProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Icon added after the item text.
   */
  endIcon?: React.ReactElement;
  /**
   * Whether the menu item is selected.
   */
  isSelected?: boolean;
  /**
   * The text for the menu list label.
   */
  label: string;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}
