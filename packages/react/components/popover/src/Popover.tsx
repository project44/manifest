import * as React from 'react';
import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { Overlay } from '@project44-manifest/react-overlay';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { PopoverProvider } from './Popover.context';
import type { PopoverElement, PopoverProps } from './Popover.types';

export const Popover = React.forwardRef((props, forwardedRef) => {
  const {
    children,
    defaultOpen,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isNonModal,
    isOpen,
    maxHeight,
    offset = 8,
    onClose,
    onEntered,
    onExited,
    onOpenChange,
    placement = 'bottom',
    scrollRef,
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    shouldFlip = true,
    shouldUpdatePosition = true,
    type = 'dialog',
  } = props;

  const [trigger, content] = React.Children.toArray(children) as [
    React.ReactElement,
    React.ReactElement,
  ];

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const state = useOverlayTriggerState({ defaultOpen, isOpen, onOpenChange });
  const { triggerProps, overlayProps } = useOverlayTrigger({ type }, state, triggerRef);
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

  const handleClose = React.useCallback(() => {
    onClose?.();

    state?.close();
  }, [onClose, state]);

  const context = React.useMemo(
    () => ({
      isDismissable,
      isKeyboardDismissDisabled,
      isNonModal,
      onClose: handleClose,
      overlayProps: { ...overlayProps, ...positionProps },
      overlayRef,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
      state,
      triggerProps,
      triggerRef,
    }),
    [
      isDismissable,
      isKeyboardDismissDisabled,
      isNonModal,
      handleClose,
      overlayProps,
      overlayRef,
      positionProps,
      state,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
      triggerProps,
      triggerRef,
    ],
  );

  return (
    <PopoverProvider value={context}>
      {trigger}
      <Overlay isOpen={state.isOpen} onEntered={onEntered} onExited={onExited}>
        {content}
      </Overlay>
    </PopoverProvider>
  );
}) as ForwardRefComponent<PopoverElement, PopoverProps>;
