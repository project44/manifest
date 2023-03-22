import type { IconProps } from '@project44-manifest/react-icon';
import type { CSS } from '@project44-manifest/react-styles';
import type { MenuItemProps } from '../MenuItem';
import type { TypographyProps } from '../Typography';

export type MenuGroupElement = 'div';

export interface MenuGroupProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether the menu group is open by default (uncontrolled).
   */
  defaultExpanded?: boolean;
  /**
   * Props pass to the end icon.
   */
  iconProps?: IconProps;
  /**
   * Whether the menu group is expanded by default (controlled).
   */
  isExpanded?: boolean;
  /**
   * Props passed to the root menu item.
   */
  itemProps?: MenuItemProps;
  /**
   * The text for the menu group label.
   */
  label: string;
  /**
   * Props passed to the label component.
   */
  labelProps?: TypographyProps;
  /**
   * Handler that is called when the menu group's open state changes.
   */
  onExpandedChange?: (isOpen: boolean) => void;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}
