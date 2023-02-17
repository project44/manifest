import type { AvatarProps } from '@project44-manifest/react-avatar';
import type { ButtonProps } from '@project44-manifest/react-button';
import type { CSS } from '@project44-manifest/react-styles';

export type SideNavigationFooterMenuElement = 'button';

export interface SideNavigationFooterMenuProps extends ButtonProps {
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
