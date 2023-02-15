import * as React from 'react';
import { DismissButton, useModal, useOverlay } from '@project44-manifest/react-overlay';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '@project44-manifest/react-utils';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { StyledPopover } from './Popover.styles';
import type { PopoverElement, PopoverProps } from './Popover.types';

export const Popover = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isOpen,
    onClose,
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    ...other
  } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(overlayRef, forwardedRef);

  const { overlayProps } = useOverlay(
    {
      isDismissable: isDismissable && isOpen,
      isKeyboardDismissDisabled,
      isOpen,
      onClose,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    },
    overlayRef,
  );

  const { modalProps } = useModal({ isDisabled: true });

  return (
    <StyledPopover
      {...mergeProps(overlayProps, modalProps, other)}
      ref={mergedRef}
      as={as}
      className={cx('manifest-popover', classNameProp)}
      css={css}
      role="presentation"
    >
      <DismissButton onDismiss={onClose} />
      {children}
      <DismissButton onDismiss={onClose} />
    </StyledPopover>
  );
}) as ForwardRefComponent<PopoverElement, PopoverProps>;
