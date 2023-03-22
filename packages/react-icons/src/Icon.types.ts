import type { CSS } from '@project44-manifest/react-styles';

export type IconElement = 'svg';

export type IconSize = 'large' | 'medium' | 'small' | 'x-small';

export interface IconProps {
  /**
   * Indicates whether the element is exposed to an accessibility API.
   */
  'aria-hidden'?: boolean | 'false' | 'true';
  /**
   * A screen reader only label for the Icon.
   */
  'aria-label'?: string;
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The size of the icon.
   *
   * @default 'large'
   */
  size?: IconSize;
}
