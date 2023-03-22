import type { CSS } from '@project44-manifest/react-styles';

export type ToasterElement = 'div';

export interface ToasterProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The length of time (in milliseconds) the toast is rendered.
   *
   * @default 5000
   */
  duration?: number;
}
