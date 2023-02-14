import type * as React from 'react';

export type PopoverPlacement =
  | 'bottom end'
  | 'bottom left'
  | 'bottom right'
  | 'bottom start'
  | 'bottom'
  | 'end bottom'
  | 'end top'
  | 'end'
  | 'left bottom'
  | 'left top'
  | 'left'
  | 'right bottom'
  | 'right top'
  | 'right'
  | 'start bottom'
  | 'start top'
  | 'start'
  | 'top end'
  | 'top left'
  | 'top right'
  | 'top start'
  | 'top';

export type PopoverElement = 'div';

export interface PopoverProps {
  /**
   * Whether the overlay is open by default (uncontrolled).
   */
  defaultOpen?: boolean;
  /**
   * Whether to close the popover when the user interacts outside it.
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
   * Whether the popover is non-modal, i.e. elements outside the popover may be
   * interacted with by assistive technologies.
   *
   * Most popovers should not use this option as it may negatively impact the screen
   * reader experience. Only use with components such as combobox, which are designed
   * to handle this situation carefully.
   */
  isNonModal?: boolean;
  /**
   * Whether pressing the escape key to close the popover should be disabled.
   *
   * @default false
   */
  /** Whether the popover is open by default (controlled). */
  isOpen?: boolean;
  /**
   * The maxHeight specified for the popover element.
   *
   * By default, it will take all space up to the current viewport height.
   */
  maxHeight?: number;
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   *
   * @default 4
   */
  offset?: number;
  /**
   * Handler that is called when the popover should close.
   */
  onClose?: () => void;
  /**
   * Handler that is called when the popover has finished entering.
   */
  onEntered?: () => void;
  /**
   * Handler that is called when the popover has finished exiting.
   */
  onExited?: () => void;
  /**
   * Handler that is called when the overlay's open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: PopoverPlacement;
  /**
   * A ref for the scrollable region within the popover.
   *
   * @default overlayRef
   */
  scrollRef?: React.RefObject<Element>;
  /**
   * Whether the popover should close when focus is lost or moves outside it.
   *
   * @default false
   */
  shouldCloseOnBlur?: boolean;
  /**
   * When user interacts with the argument element outside of the popover ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the popover.
   * By default, onClose will always be called on interaction outside the popover ref.
   */
  shouldCloseOnInteractOutside?: (element: Element) => boolean;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * Whether the popover should update its position automatically.
   *
   * @default true
   */
  shouldUpdatePosition?: boolean;
  /**
   * Type of popover that is opened by the trigger.
   *
   * @default 'dialog'
   */
  type?: 'dialog' | 'grid' | 'listbox' | 'menu' | 'tree';
}
