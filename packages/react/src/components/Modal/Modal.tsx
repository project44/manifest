import * as React from 'react';
import { useOverlay, useOverlayFocusContain, usePreventScroll } from '@react-aria/overlays';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useMergedRef } from '../../hooks';
import { mergeProps } from '../../utils';
import { Overlay } from '../Overlay';
import { StyledModal, StyledModalWrapper, StyledUnderlay } from './Modal.styles';
import type { ModalElement, ModalProps } from './Modal.types';

/**
 * Modal implementation; Need to initialize the overlay component before calling
 * any modal related hooks to ensure focus states are managed correctly.
 *
 * @private
 */
const ModalImpl = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    isDismissable,
    isKeyboardDismissDisabled,
    isOpen,
    onClose,
    ...other
  } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(overlayRef, forwardedRef);

  const { overlayProps, underlayProps } = useOverlay(
    {
      isDismissable,
      isKeyboardDismissDisabled,
      isOpen,
      onClose,
    },
    overlayRef,
  );

  const className = cx('manifest-modal', classNameProp, {
    'manifest-modal--open': isOpen,
  });

  usePreventScroll({ isDisabled: !isOpen });

  useOverlayFocusContain();

  return (
    <>
      <StyledUnderlay {...underlayProps} className="manifest-underlay" isOpen={isOpen} />
      <StyledModalWrapper className="manifest-modal-wrapper" isOpen={isOpen}>
        <StyledModal
          {...mergeProps(overlayProps, other)}
          ref={mergedRef}
          as={as}
          className={className}
          css={css}
          isOpen={isOpen}
        >
          {children}
        </StyledModal>
      </StyledModalWrapper>
    </>
  );
}) as ForwardRefComponent<ModalElement, ModalProps>;

ModalImpl.displayName = 'ModalImpl';

export const Modal = React.forwardRef((props, forwardedRef) => {
  const { isOpen, ...other } = props;

  return (
    <Overlay isOpen={isOpen}>
      <ModalImpl {...other} ref={forwardedRef} isOpen={isOpen} />
    </Overlay>
  );
}) as ForwardRefComponent<ModalElement, ModalProps>;
Modal.displayName = 'Modal';
