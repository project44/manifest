import type { AriaButtonProps } from '@react-types/button';
import type { CSS } from '@project44-manifest/react-styles';

export type PaginationItemElement = 'button';

export interface PaginationItemProps extends AriaButtonProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether the pagination item is active.
   */
  isActive?: boolean;
}
