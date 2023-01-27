import type { CSS } from '@project44-manifest/react-styles';

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
   * Whether the menu group is expanded by default (controlled).
   */
  isExpanded?: boolean;
  /**
   * The text for the menu group label.
   */
  label: string;
  /**
   * Handler that is called when the menu group's open state changes.
   */
  onExpandedChange?: (isOpen: boolean) => void;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}
