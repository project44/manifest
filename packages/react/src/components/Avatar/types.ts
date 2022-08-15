import type { ComponentProps } from '../../types';

export type AvatarSize = 'small' | 'medium';

export interface AvatarOptions {
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
}

export interface AvatarProps extends AvatarOptions, ComponentProps<'div'> {
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
}
