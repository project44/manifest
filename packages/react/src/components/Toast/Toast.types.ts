import type { CSS } from '@project44-manifest/react-styles';
import type { IconButton } from '../button';

export type ToastVariant = 'default' | 'error' | 'info' | 'success' | 'warning';

export type ToastElement = 'div';

export interface ToastProps {
  /**
   * The action to display.
   */
  action?: React.ReactNode;
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The description to display.
   */
  description?: string;
  /**
   * Props passed to the dismiss button.
   */
  dismissButtonProps?: React.ComponentProps<typeof IconButton>;
  /**
   * Whether the toast can be dismiss by the user.
   *
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Whether the toast is current visible.
   *
   * @default false
   */
  isVisible?: boolean;
  /**
   * The message of the toast.
   */
  message: string;
  /**
   * Handler that is called when the toast is dismissed.
   */
  onDismiss?: () => void;
  /**
   * The display variant of the toast.
   *
   * @default 'default'
   */
  variant?: ToastVariant;
}

export interface ToastOptions {
  /**
   * The action to display.
   */
  action?: React.ReactNode;
  /**
   * Classname applied to the toast component.
   */
  className?: string;
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * A description of the toast.
   */
  description?: string;
  /**
   * Props passed to the dismiss button.
   */
  dismissButtonProps?: React.ComponentProps<typeof IconButton>;
  /**
   * The length of time (in milliseconds) the toast is rendered.
   *
   * @default 5000
   */
  duration?: number;
  /**
   * Whether the toast can be dismiss by the user.
   *
   * @default true
   */
  isDismissable?: boolean;
  /**
   * The message of the toast.
   */
  message: string;
  /**
   * Handler that is called when the toast is dismissed.
   */
  onDismiss?: () => void;
  /**
   * The display variant of the toast.
   */
  variant?: ToastVariant;
}
