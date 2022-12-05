import type { CSS } from '@project44-manifest/react-styles';

export type ContainerElement = 'div';

export interface ContainerProps {
  /** Theme aware style object */
  css?: CSS;
  /**
   * Whether the container should adjust its max-width based on the current screen size.
   *
   * @default true
   */
  fixed?: boolean;
  /**
   * The max-width of the container.
   *
   * @default 'large'
   */
  maxWidth?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
}
