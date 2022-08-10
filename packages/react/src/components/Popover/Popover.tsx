import type { DOMProps, StyleProps } from '../../types';
import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { OverlayContainer, useModal, useOverlay, useOverlayPosition } from '@react-aria/overlays';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useStyles } from './Popover.styles';
import { mergeProps, mergeRefs } from '@react-aria/utils';

type PopoverElement = React.ElementRef<'div'>;

interface PopoverProps extends DOMProps, StyleProps {
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
  triggerRef: React.RefObject<HTMLElement>;
  /**
   * Handler that is called when the popover should close.
   */
  onClose?(): void;
  /**
   * When user interacts with the argument element outside of the overlay ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the overlay.
   * By default, onClose will always be called on interaction outside the overlay ref.
   */
  shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}

const Popover = React.forwardRef<PopoverElement, PopoverProps>((props, forwardedRef) => {
  const {
    children,
    className: classNameProp,
    css,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isNonModal,
    isOpen,
    offset = 4,
    onClose,
    placement = 'bottom',
    scrollRef,
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    shouldFlip = true,
    triggerRef,
    ...other
  } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);

  const { overlayProps } = useOverlay(
    {
      isOpen,
      isDismissable: isDismissable && isOpen,
      isKeyboardDismissDisabled,
      onClose,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    },
    overlayRef,
  );
  const { dialogProps } = useDialog({ role: 'dialog' }, overlayRef);
  const { modalProps } = useModal({ isDisabled: isNonModal });
  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    scrollRef,
    placement,
    shouldFlip,
    isOpen,
    onClose,
  });

  const { className } = useStyles({ css });

  const classes = cx(className, classNameProp, {
    'manifest-popover': true,
    'manifest-popover--open': isOpen,
    [`manifest-popover--${placement}`]: placement,
  });

  if (!isOpen) return null;

  return (
    <OverlayContainer>
      <FocusScope restoreFocus>
        <div
          {...mergeProps(overlayProps, dialogProps, modalProps, positionProps, other)}
          className={classes}
          ref={mergeRefs(overlayRef, forwardedRef)}
          role="presentation"
        >
          {children}
        </div>
      </FocusScope>
    </OverlayContainer>
  );
});

if (__DEV__) {
  Popover.displayName = 'ManifestPopover';
}

export { Popover };
export type { PopoverProps };
