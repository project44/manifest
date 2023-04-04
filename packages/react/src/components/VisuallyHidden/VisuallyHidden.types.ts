import type { CSS } from '@project44-manifest/react-styles';

export type VisuallyHiddenElement = 'div';

export interface VisuallyHiddenProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether the element should become visible on focus, for example skip links.
   */
  isFocusable?: boolean;
}
