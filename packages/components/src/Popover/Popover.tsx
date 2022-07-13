import type { Placement, OverlayTriggerProps } from '@react-types/overlays';
import * as React from 'react';
import { CSS, cx, usePopoverStyles } from './Popover.styles';
import {
  DismissButton,
  OverlayContainer,
  useModal,
  useOverlay,
  useOverlayPosition,
  useOverlayTrigger,
} from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useOverlayTriggerState } from '@react-stately/overlays';

/**
 * -----------------------------------------------------------------------------------------------
 * Popover
 * -----------------------------------------------------------------------------------------------
 */

type PopoverElement = React.ElementRef<'div'>;
type PopoverNativeProps = React.ComponentPropsWithRef<'div'>;

interface PopoverProps extends PopoverNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
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
   * Whether the popover should close when focus is lost or moves outside it.
   *
   * @default false
   */
  shouldCloseOnBlur?: boolean;
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
    onClose,
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    ...other
  } = props;

  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { dialogProps } = useDialog({ role: 'dialog' }, popoverRef);
  const { overlayProps } = useOverlay(
    {
      isOpen,
      isDismissable: isDismissable && isOpen,
      isKeyboardDismissDisabled,
      onClose,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    },
    popoverRef,
  );
  const { modalProps } = useModal({ isDisabled: isNonModal });

  const { className } = usePopoverStyles({ css });

  if (!isOpen) return null;

  return (
    <OverlayContainer>
      <FocusScope restoreFocus>
        <div
          {...mergeProps(other, overlayProps, modalProps, dialogProps)}
          className={cx('manifest-popover', className, classNameProp)}
          ref={mergeRefs(popoverRef, forwardedRef)}
        >
          <DismissButton onDismiss={onClose} />
          {children}
          <DismissButton onDismiss={onClose} />
        </div>
      </FocusScope>
    </OverlayContainer>
  );
});

if (__DEV__) {
  Popover.displayName = 'ManifestPopover';
}

Popover.toString = () => '.manifest-popover';

/**
 * -----------------------------------------------------------------------------------------------
 * usePopover
 * -----------------------------------------------------------------------------------------------
 */

interface UsePopoverProps extends OverlayTriggerProps {
  /**
   * The placement of the popover with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * Whether the popover should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
}

function usePopover(props: UsePopoverProps) {
  const { defaultOpen, isOpen, onOpenChange, placement = 'bottom', shouldFlip = true } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const state = useOverlayTriggerState({ defaultOpen, isOpen, onOpenChange });

  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);

  const { overlayProps: positionProps } = useOverlayPosition({
    offset: 4,
    isOpen: state?.isOpen,
    overlayRef,
    placement,
    shouldFlip,
    targetRef: triggerRef,
  });

  const handleClose = React.useCallback(() => {
    state.close();
  }, [state]);

  return {
    overlayProps: mergeProps(overlayProps, positionProps),
    overlayRef,
    state,
    onClose: handleClose,
    triggerProps,
    triggerRef,
  };
}

export { Popover, usePopover };
export type { PopoverProps, UsePopoverProps };
