import type { CSS } from '@project44-manifest/react-styles';
import type { ButtonSize, ButtonVariant } from '../types';

export type ButtonGroupElement = 'div';

export interface ButtonGroupProps {
  /** Theme aware style object */
  css?: CSS;
  /**
   * Whether the buttons in the button group are all disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the buttons in the button are attached.
   */
  isAttached?: boolean;
  /**
   * The size of the buttons in the group.
   *
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * The group variant
   *
   * @default 'primary'
   */
  variant?: ButtonVariant;
}
