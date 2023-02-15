import * as React from 'react';
import { DismissButton, useOverlay, useOverlayPosition } from '@project44-manifest/react-overlay';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '@project44-manifest/react-utils';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { usePopoverContext } from '../Popover.context';
import { StyledPopoverContent } from './PopoverContent.styles';
import type { PopoverContentElement, PopoverContentProps } from './PopoverContent.types';

export const PopoverContent = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    isDismissable,
    isKeyboardDismissDisabled,
    maxHeight,
    offset,
    onClose,
    placement,
    scrollRef,
    shouldCloseOnBlur,
    shouldCloseOnInteractOutside,
    shouldFlip,
    shouldUpdatePosition,
    ...other
  } = props;

  const { state, triggerRef } = usePopoverContext();

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(overlayRef, forwardedRef);

  const handleClose = React.useCallback(() => {
    state.close();

    onClose?.();
  }, [state, onClose]);

  const { overlayProps } = useOverlay(
    {
      isDismissable: isDismissable && state.isOpen,
      isKeyboardDismissDisabled,
      isOpen: state.isOpen,
      onClose: handleClose,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
    },
    overlayRef,
  );

  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state.isOpen,
    maxHeight,
    offset,
    overlayRef,
    placement,
    scrollRef,
    shouldFlip,
    shouldUpdatePosition,
    targetRef: triggerRef,
  });

  return (
    <StyledPopoverContent
      {...mergeProps(overlayProps, positionProps, other)}
      ref={mergedRef}
      as={as}
      className={cx('manifest-popover', classNameProp)}
      css={css}
      role="presentation"
    >
      {children}
      <DismissButton onDismiss={handleClose} />
    </StyledPopoverContent>
  );
}) as ForwardRefComponent<PopoverContentElement, PopoverContentProps>;
