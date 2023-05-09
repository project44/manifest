import type { CSS } from '@project44-manifest/react-styles';
import type { AvatarProps } from '../avatar';
import type { DropdownMenuProps } from '../DropdownMenu';

export type SideNavigationFooterMenuElement = 'button';

export interface SideNavigationFooterMenuProps extends DropdownMenuProps {
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
   * The subt title of the footer menu
   */
  subTitle?: string;
}
