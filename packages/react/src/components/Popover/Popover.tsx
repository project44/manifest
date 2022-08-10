import type { DOMProps, StyleProps } from '../../types';
import type { DOMRef } from '@react-types/shared';
import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { DismissButton, OverlayContainer, useModal, useOverlay } from '@react-aria/overlays';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { useDialog } from '@react-aria/dialog';
import { useDOMRef } from '@react-spectrum/utils';
import { useStyles } from './Popover.styles';

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
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
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

const Popover = React.forwardRef((props: PopoverProps, forwardedRef: DOMRef<HTMLDivElement>) => {
  const {
    children,
    className: classNameProp,
    css,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isNonModal,
    isOpen,
    onClose,
    placement = 'bottom',
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    ...other
  } = props;

  const overlayRef = useDOMRef(forwardedRef);

  const { dialogProps } = useDialog({ role: 'dialog' }, overlayRef);
  const { overlayProps } = useOverlay(
    {
      isOpen: isOpen,
      isDismissable: isDismissable && isOpen,
      isKeyboardDismissDisabled,
      onClose,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    },
    overlayRef,
  );
  const { modalProps } = useModal({ isDisabled: isNonModal });

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
          {...mergeProps(overlayProps, modalProps, dialogProps, other)}
          className={classes}
          ref={overlayRef}
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
