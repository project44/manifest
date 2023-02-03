import type { CSS } from '@project44-manifest/react-styles';

export type AvatarElement = 'div';

export interface AvatarProps {
  /**
   * The alt text passed to the image.
   */
  alt?: string;
  /**
   * Name used as a fallback if src is not provided or image cannot be found.
   */
  fallback?: React.ReactNode;
  /**
   * The size of the avatar.
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  /**
   * Theme aware style object
   */
  css?: CSS;
}
