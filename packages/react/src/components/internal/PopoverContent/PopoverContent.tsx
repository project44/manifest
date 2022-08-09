import type { DOMProps, StyleProps } from '../../../types';
import type { PlacementAxis } from '@react-types/overlays';
import * as React from 'react';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { PopoverContext, usePopover } from '../../Popover/Popover.context';
import { cx } from '../../../styles';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useStyles } from './PopoverContent.styles';

type PopoverContentElement = React.ElementRef<'div'>;

interface PopoverContentProps extends DOMProps, StyleProps {
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
  placement?: PlacementAxis;
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

const PopoverContent = React.forwardRef<PopoverContentElement, PopoverContentProps>(
  (props, forwardedRef) => {
    const { children, className: classNameProp, css, ...other } = props;

    const {
      isDismissable,
      isKeyboardDismissDisabled,
      isNonModal,
      isOpen,
      onClose,
      placement,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    } = usePopover() as PopoverContext;

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

    const { className } = useStyles({ css: { ...css, transformOrigin: placement } });

    const classes = cx(className, classNameProp, {
      'manifest-popover': true,
      'manifest-popover--open': isOpen,
      [`manifest-popover--${placement}`]: placement,
    });

    return (
      <FocusScope restoreFocus>
        <div
          {...mergeProps(other, overlayProps, modalProps, dialogProps)}
          className={classes}
          ref={mergeRefs(popoverRef, forwardedRef)}
          role="presentation"
        >
          <DismissButton onDismiss={onClose} />
          {children}
          <DismissButton onDismiss={onClose} />
        </div>
      </FocusScope>
    );
  },
);

if (__DEV__) {
  PopoverContent.displayName = 'ManifestPopover';
}

export { PopoverContent };
export type { PopoverContentProps };
