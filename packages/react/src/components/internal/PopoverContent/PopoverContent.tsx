import type { StyleProps } from '../../../types';
import * as React from 'react';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { PopoverContext, usePopoverContext } from '../../Popover/Popover.context';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../../styles';
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

export type PopoverContentProps = StyleProps;

export const PopoverContent = createComponent<'div', PopoverContentProps>((props, forwardedRef) => {
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
});
