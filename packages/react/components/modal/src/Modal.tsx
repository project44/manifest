import * as React from 'react';
import {
  Overlay,
  useOverlay,
  useOverlayFocusContain,
  usePreventScroll,
} from '@project44-manifest/react-overlay';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '@project44-manifest/react-utils';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
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

  const className = cx('manifest-modal', classNameProp);

  usePreventScroll({ isDisabled: !isOpen });

  useOverlayFocusContain();

  return (
    <>
      <StyledUnderlay {...underlayProps} className="manifest-underlay" />
      <StyledModalWrapper className="manifest-modal-wrapper">
        <StyledModal
          {...mergeProps(overlayProps, other)}
          ref={mergedRef}
          as={as}
          className={className}
          css={css}
        >
          {children}
        </StyledModal>
      </StyledModalWrapper>
    </>
  );
}) as ForwardRefComponent<ModalElement, ModalProps>;

export const Modal = React.forwardRef((props, forwardedRef) => {
  const { isOpen, ...other } = props;

  return (
    <Overlay isOpen={isOpen}>
      <ModalImpl {...other} ref={forwardedRef} isOpen={isOpen} />
    </Overlay>
  );
}) as ForwardRefComponent<ModalElement, ModalProps>;
