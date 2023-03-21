import type { CSS } from '@project44-manifest/react-styles';
import type { ButtonGroupProps } from '../ButtonGroup/ButtonGroup.types';

export type DialogFooterElement = 'div';

export interface DialogFooterProps {
  /**
   * Props passed to the button group component.
   */
  buttonGroupProps?: ButtonGroupProps;
  /**
   * Theme aware style object
   */
  css?: CSS;
}
