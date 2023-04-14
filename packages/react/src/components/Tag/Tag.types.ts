import type { CSS } from '@project44-manifest/react-styles';
import { IconProps } from '../Icon';

export type TagElement = 'div';

export interface TagProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Props passed to the icon component
   */
  iconProps?: IconProps;
  /**
   * Whether the tag is removable.
   */
  isRemovable?: boolean;
  /**
   * Handler called on tag removable.
   */
  onRemove?: () => void;
}
