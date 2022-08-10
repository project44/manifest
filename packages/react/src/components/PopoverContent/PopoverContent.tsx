import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { PopoverContext, usePopoverContext } from '../Popover';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useStyles } from './PopoverContent.styles';

type PopoverContentElement = React.ElementRef<'div'>;

interface PopoverContentProps extends DOMProps, StyleProps {
  /**
   * The content of the popover.
   */
  children?: React.ReactNode;
}

const PopoverContent = React.forwardRef<PopoverContentElement, PopoverContentProps>(
  (props, forwardedRef) => {
    const { children, className: classNameProp, css, ...other } = props;

    const {
      getPopoverProps,
      isDismissable,
      isKeyboardDismissDisabled,
      isNonModal,
      isOpen,
      onClose,
      overlayRef,
      placement,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    } = usePopoverContext() as PopoverContext;

    const { dialogProps } = useDialog({ role: 'dialog' }, overlayRef);
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
    const { modalProps } = useModal({ isDisabled: isNonModal });

    const { className } = useStyles({ css });

    const classes = cx(className, classNameProp, {
      'manifest-popover': true,
      'manifest-popover--open': isOpen,
      [`manifest-popover--${placement}`]: placement,
    });

    return (
      <FocusScope restoreFocus>
        <div
          {...getPopoverProps(mergeProps(overlayProps, modalProps, dialogProps, other))}
          className={classes}
          ref={mergeRefs(overlayRef, forwardedRef)}
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
