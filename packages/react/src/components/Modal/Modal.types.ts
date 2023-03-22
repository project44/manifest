import type { CSS } from '@project44-manifest/react-styles';

export type ModalElement = 'div';

export interface ModalProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether to close the modal when the user interacts outside it.
   *
   * @default false
   */
  isDismissable?: boolean;
  /**
   * Whether pressing the escape key to close the modal should be disabled.
   *
   * @default false
   */
  isKeyboardDismissDisabled?: boolean;
  /**
   *  Whether the modal is currently open.
   */
  isOpen?: boolean;
  /**
   * Handler that is called when the modal should close.
   */
  onClose?: () => void;
}
