import type { CSS } from '@project44-manifest/react-styles';

export type NavigationElement = 'div';

export interface NavigationProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether the navigation is open by default (uncontrolled).
   */
  defaultOpen?: boolean;
  /**
   * Whether the navigation is expanded by default (controlled).
   */
  isOpen?: boolean;
  /**
   * Handler that is called when the navigation's open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void;
}
