import type { CSS } from '@project44-manifest/react-styles';

export type ActionCardImageElement = 'div';

export interface ActionCardImageProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The size of the card image
   *
   * @default 'large'
   */
  size?: 'large' | 'small';
  /**
   * The source for the image
   */
  src: string;
}
