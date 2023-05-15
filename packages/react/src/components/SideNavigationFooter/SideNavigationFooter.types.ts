import type { CSS } from '@project44-manifest/react-styles';
import type { AvatarProps } from '../avatar';
import type { ButtonProps } from '../button';

export type SideNavigationFooterElement = 'button';

export interface SideNavigationFooterProps extends ButtonProps {
  /**
   * Props passed to the avatar component
   */
  avatarProps: AvatarProps;
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The title of the footer menu
   */
  title: string;
  /**
   * The sub title of the footer menu
   */
  subTitle?: string;
}
