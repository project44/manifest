import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { PopoverContext, usePopoverContext } from '../Popover';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { Transition, TransitionStatus } from 'react-transition-group';
import { useDialog } from '@react-aria/dialog';
import { useStyles } from './PopoverContent.styles';

// TODO: create transition utlites.
const styles: Partial<Record<TransitionStatus, React.CSSProperties>> = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
};

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
    });

    return (
      <FocusScope restoreFocus>
        <Transition in={isOpen} appear onExited={onExited} onEntered={onEntered} timeout={100}>
          {state => (
            <div
              {...completeProps}
              {...contextProps}
              className={classes}
              ref={mergeRefs(overlayRef, forwardedRef)}
              style={{
                opacity: 0,
                visibility: state === 'exited' && !isOpen ? 'hidden' : undefined,
                ...styles[state],
                ...positionProps.style,
              }}
            >
              <DismissButton onDismiss={onClose} />
              {children}
              <DismissButton onDismiss={onClose} />
            </div>
          )}
        </Transition>
      </FocusScope>
    );
  },
);

if (__DEV__) {
  PopoverContent.displayName = 'ManifestPopover';
}

export { PopoverContent };
export type { PopoverContentProps };
