import { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { DismissButton, OverlayContainer, useModal, useOverlay } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useStyles } from './Popover.styles';

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

  const { className } = useStyles({ css });

  if (!isOpen) return null;

  return (
    <OverlayContainer>
      <FocusScope restoreFocus>
        <div
          {...mergeProps(other, overlayProps, modalProps, dialogProps)}
          className={cx(className, classNameProp, 'manifest-popover')}
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

export { Popover };
export type { PopoverProps };
