import type { AriaMenuProps } from '@react-types/menu';
import type { CSS } from '@project44-manifest/react-styles';

export type DropdownMenuElement = 'ul';

export interface DropdownMenuProps extends AriaMenuProps<object> {
  /**
   * Theme aware style object
   */
  css?: CSS;
}
