import type { CSS } from '@project44-manifest/react-styles';
import type { TypographyProps } from '@project44-manifest/react-typography';

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
   * Props passed to the label component.
   */
  labelProps?: TypographyProps;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}
