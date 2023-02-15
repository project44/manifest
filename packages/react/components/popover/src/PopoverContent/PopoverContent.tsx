import * as React from 'react';
import { DismissButton, usePopover } from '@react-aria/overlays';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '@project44-manifest/react-utils';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { StyledPopoverContent } from './PopoverContent.styles';
import type { PopoverContentElement, PopoverContentProps } from './PopoverContent.types';

export const PopoverContent = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    isKeyboardDismissDisabled = false,
    isNonModal,
    maxHeight,
    offset = 8,
    onClose,
    placement = 'bottom',
    scrollRef,
    shouldFlip = true,
    shouldUpdatePosition = true,
    state,
    triggerRef,
    ...other
  } = props;

  const popoverRef = React.useRef<HTMLDivElement>(null);
  const { popoverProps } = usePopover(
    {
      isKeyboardDismissDisabled,
      isNonModal,
      maxHeight,
      offset,
      placement,
      popoverRef,
      scrollRef,
      shouldFlip,
      shouldUpdatePosition,
      triggerRef,
    },
    state,
  );

  const handleClose = React.useCallback(() => {
    onClose?.();

    state?.close();
  }, [onClose, state]);

  const mergedRef = useMergedRef(popoverRef, forwardedRef);

  return (
    <StyledPopoverContent
      {...mergeProps(popoverProps, other)}
      ref={mergedRef}
      as={as}
      className={cx('manifest-popover', classNameProp)}
      css={css}
      role="presentation"
    >
      {!isNonModal && <DismissButton onDismiss={handleClose} />}
      {children}
      <DismissButton onDismiss={handleClose} />
    </StyledPopoverContent>
  );
}) as ForwardRefComponent<PopoverContentElement, PopoverContentProps>;
