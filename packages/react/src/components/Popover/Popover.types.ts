import type { CSS } from '@project44-manifest/react-styles';

export type PopoverElement = 'div';

export interface PopoverProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether to close the overlay when the user interacts outside it.
   *
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Whether pressing the escape key to close the popover should be disabled.
   *
   * @default false
   */
  isKeyboardDismissDisabled?: boolean;
  /**
   *  Whether the popover is currently open.
   */
  isOpen?: boolean;
  /**
   * Handler that is called when the popover should close.
   */
  onClose?: () => void;
  /**
   * Whether the overlay should close when focus is lost or moves outside it.
   */
  shouldCloseOnBlur?: boolean;
  /**
   * When user interacts with the argument element outside of the overlay ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the overlay.
   * By default, onClose will always be called on interaction outside the overlay ref.
   */
  shouldCloseOnInteractOutside?: (element: Element) => boolean;
}
