import * as React from 'react';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '@project44-manifest/react-utils';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { usePopoverContext } from '../Popover.context';
import { StyledPopoverContent } from './PopoverContent.styles';
import type { PopoverContentElement, PopoverContentProps } from './PopoverContent.types';

export const PopoverContent = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const {
    isDismissable,
    isNonModal,
    isKeyboardDismissDisabled,
    onClose,
    overlayRef,
    overlayProps,
    state,
    shouldCloseOnBlur,
    shouldCloseOnInteractOutside,
  } = usePopoverContext();

  const mergedRef = useMergedRef(overlayRef, forwardedRef);

  const { overlayProps: popoverProps } = useOverlay(
    {
      isDismissable: isDismissable && state.isOpen,
      isKeyboardDismissDisabled,
      isOpen: state.isOpen,
      onClose,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    },
    overlayRef,
  );

  const { modalProps } = useModal({ isDisabled: isNonModal });

  return (
    <StyledPopoverContent
      {...mergeProps(popoverProps, modalProps, overlayProps, other)}
      ref={mergedRef}
      as={as}
      className={cx('manifest-popover', classNameProp)}
      css={css}
      role="presentation"
    >
      {!isNonModal && <DismissButton onDismiss={onClose} />}
      {children}
      <DismissButton onDismiss={onClose} />
    </StyledPopoverContent>
  );
}) as ForwardRefComponent<PopoverContentElement, PopoverContentProps>;
