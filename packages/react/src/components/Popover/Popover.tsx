import type { DOMProps, StyleProps } from '../../types';
import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { OverlayContainer, useOverlayPosition } from '@react-aria/overlays';
import { PopoverContext } from './Popover.context';
import { PopoverContent } from '../internal/PopoverContent';

export interface PopoverProps extends DOMProps, StyleProps {
  /**
   * The content of the popover.
   */
  children?: React.ReactNode;
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
   * Props pass to the overlay element.
   */
  overlayProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * A ref for the overlay.
   */
  overlayRef: React.RefObject<HTMLDivElement>;
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
   * A ref for the trigger element.
   */
  triggerRef: React.RefObject<HTMLElement>;
  /**
   * Type of overlay that is opened by the trigger.
   *
   * @default 'dialog'
   */
  type?: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
  /**
   * Handler that is called when the popover should close.
   */
  onClose?(): void;
  /**
   * Callback fired after the "entered" status is applied.
   */
  onEntered?(): void;
  /**
   * Callback fired after the "exited" status is applied.
   */
  onExited?(): void;
  /**
   * When user interacts with the argument element outside of the overlay ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the overlay.
   * By default, onClose will always be called on interaction outside the overlay ref.
   */
  shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}

export const Popover: React.FC<PopoverProps> = props => {
  const {
    children,
    className,
    css,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isNonModal,
    isOpen,
    offset = 4,
    onClose,
    onEntered,
    onExited,
    overlayProps,
    overlayRef,
    placement = 'bottom',
    scrollRef,
    shouldFlip = true,
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    triggerRef,
  } = props;

  const [exited, setExited] = React.useState(isOpen);

  const { overlayProps: positionProps } = useOverlayPosition({
    offset,
    isOpen,
    overlayRef,
    placement,
    scrollRef,
    shouldFlip,
    targetRef: triggerRef,
  });

  const handleClose = React.useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleEntered = React.useCallback(() => {
    setExited(false);

    onEntered?.();
  }, [onEntered]);

  const handleExited = React.useCallback(() => {
    setExited(true);

    onExited?.();
  }, [onExited]);

  const mounted = !!isOpen || !exited;

  return (
    <PopoverContext.Provider
      value={{
        isDismissable,
        isKeyboardDismissDisabled,
        isNonModal,
        isOpen,
        onClose: handleClose,
        onEntered: handleEntered,
        onExited: handleExited,
        overlayProps,
        overlayRef,
        placement,
        positionProps,
        shouldCloseOnBlur,
        shouldCloseOnInteractOutside,
      }}
    >
      {mounted && (
        <OverlayContainer>
          <PopoverContent className={className} css={css}>
            {children}
          </PopoverContent>
        </OverlayContainer>
      )}
    </PopoverContext.Provider>
  );
};
