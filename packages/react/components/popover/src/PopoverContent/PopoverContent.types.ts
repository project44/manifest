import type { OverlayTriggerState } from '@react-stately/overlays';
import type { CSS } from '@project44-manifest/react-styles';

export type PopoverContentElement = 'div';

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

export interface PopoverContentProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
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
   * Manages state for a popover. Tracks whether the popover is open, and provides
   * methods to toggle this state.
   */
  state: OverlayTriggerState;
  /**
   * The ref for the element which the popover positions itself with respect to.
   */
  triggerRef: React.RefObject<Element>;
}
