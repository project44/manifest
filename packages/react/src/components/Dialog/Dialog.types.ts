import type { CSS } from '@project44-manifest/react-styles';

export type DialogElement = 'div';

export interface DialogProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether to close the dialog when the user interacts outside it.
   *
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Whether pressing the escape key to close the dialog should be disabled.
   *
   * @default false
   */
  isKeyboardDismissDisabled?: boolean;
  /**
   *  Whether the dialog is currently open.
   */
  isOpen?: boolean;
  /**
   * Handler that is called when the dialog should close.
   */
  onClose?: () => void;
  /**
   * The accessibility role for the dialog.
   *
   * @default 'dialog'
   */
  role?: 'alertdialog' | 'dialog';
}
