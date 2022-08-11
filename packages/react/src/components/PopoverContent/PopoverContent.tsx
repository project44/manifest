import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { PopoverContext, usePopoverContext } from '../Popover';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { Transition } from 'react-transition-group';
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
      isDismissable,
      isKeyboardDismissDisabled,
      isNonModal,
      isOpen,
      onClose,
      onEntered,
      onExited,
      overlayRef,
      overlayProps: contextProps,
      placement,
      positionProps,
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

    const completeProps = {
      ...mergeProps(overlayProps, modalProps, dialogProps, other),
    };

    const { className } = useStyles({ css });

    const classes = cx(className, classNameProp, {
      'manifest-popover': true,
      'manifest-popover--open': isOpen,
      [`manifest-popover--${placement}`]: placement,
    });

    console.log(positionProps);

    return (
      <Transition
        in={isOpen}
        appear
        onExited={onExited}
        onEntered={onEntered}
        timeout={{ enter: 250, exit: 200 }}
      >
        {state => (
          <FocusScope restoreFocus>
            <div
              {...completeProps}
              {...contextProps}
              {...positionProps}
              className={classes}
              ref={mergeRefs(overlayRef, forwardedRef)}
            >
              <DismissButton onDismiss={onClose} />
              {children}
              <DismissButton onDismiss={onClose} />
            </div>
          </FocusScope>
        )}
      </Transition>
    );
  },
);

if (__DEV__) {
  PopoverContent.displayName = 'ManifestPopover';
}

export { PopoverContent };
export type { PopoverContentProps };
