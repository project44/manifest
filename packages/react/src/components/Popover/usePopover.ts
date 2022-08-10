import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';

interface UsePopoverOptions {
  /**
   * Whether the popover is open by default (uncontrolled).
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
   * Whether the popover is open.
   */
  isOpen?: boolean;
  /**
   * Whether the popover should not behave as a modal.
   */
  isNonModal?: boolean;
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   *
   * @default 4
   */
  offset?: number;
  /**
   * A ref for the overlay element.
   */
  overlayRef?: React.RefObject<HTMLDivElement>;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * A ref for the scrollable region within the overlay.
   *
   * @default overlayRef
   */
  scrollRef?: React.RefObject<HTMLElement>;
  /**
   * Whether the popover should close when focus is lost or moves outside it.
   *
   * @default false
   */
  shouldCloseOnBlur?: boolean;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The ref for the element which the overlay positions itself with respect to.
   */
  triggerRef?: React.RefObject<HTMLButtonElement>;
  /**
   * Type of popover that is opened by the trigger.
   *
   * @default 'dialog'
   */
  type?: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
  /**
   * Handler that is called when the popover should close.
   */
  onClose?(): void;
  /**
   * Handler that is called when the popover's open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * When user interacts with the argument element outside of the overlay ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the overlay.
   * By default, onClose will always be called on interaction outside the overlay ref.
   */
  shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}

function usePopover(options: UsePopoverOptions) {
  const {
    defaultOpen,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isNonModal,
    isOpen,
    offset = 4,
    onClose,
    onOpenChange,
    overlayRef: overlayRefProp,
    placement = 'bottom',
    scrollRef,
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    shouldFlip = true,
    triggerRef: triggerRefProp,
    type = 'dialog',
  } = options;

  const _overlayRef = React.useRef<HTMLDivElement>(null);
  const _triggerRef = React.useRef<HTMLButtonElement>(null);

  const overlayRef = overlayRefProp ?? _overlayRef;
  const triggerRef = triggerRefProp ?? _triggerRef;

  const state = useOverlayTriggerState({ isOpen, defaultOpen, onOpenChange });

  const { triggerProps, overlayProps } = useOverlayTrigger({ type }, state, triggerRef);

  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state.isOpen,
    targetRef: triggerRef,
    scrollRef,
    placement,
    overlayRef,
    shouldFlip,
    offset,
  });

  const handleClose = React.useCallback(() => {
    state.close();

    onClose?.();
  }, [onClose]);

  const getTriggerProps = React.useCallback(
    (props = {}, forwardedRef: React.ForwardedRef<HTMLButtonElement>) => {
      const completeProps = triggerRefProp?.current
        ? mergeProps(triggerProps, props)
        : mergeProps(props, triggerProps);

      return {
        ...completeProps,
        ref: mergeRefs(triggerRef, forwardedRef),
      };
    },
    [triggerRef, triggerRefProp, triggerProps],
  );

  const getPopoverProps = React.useCallback(
    (props = {}) => ({
      ...props,
      ...overlayProps,
      ...positionProps,
    }),
    [positionProps, overlayProps, placement],
  );

  return {
    getTriggerProps,
    getPopoverProps,
    isDismissable,
    isKeyboardDismissDisabled,
    isNonModal,
    isOpen: state.isOpen,
    onClose: handleClose,
    overlayRef,
    placement,
    shouldCloseOnBlur,
    shouldCloseOnInteractOutside,
    state,
    triggerRef,
  };
}

export type { UsePopoverOptions };
export { usePopover };
