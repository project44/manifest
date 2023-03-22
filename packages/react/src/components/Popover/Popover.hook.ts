import * as React from 'react';
import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { PopoverTriggerProps, PopoverTriggerState } from './Popover.types';

export function usePopoverTrigger(props: PopoverTriggerProps, state: PopoverTriggerState) {
  const {
    maxHeight,
    offset = 4,
    placement = 'bottom',
    scrollRef,
    shouldFlip = true,
    shouldUpdatePosition = true,
    type = 'dialog',
  } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const { triggerProps, overlayProps } = useOverlayTrigger({ type }, state, triggerRef);
  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state.isOpen,
    maxHeight,
    offset,
    onClose: state.close,
    overlayRef,
    placement,
    scrollRef,
    shouldFlip,
    shouldUpdatePosition,
    targetRef: triggerRef,
  });

  return {
    overlayRef,
    overlayProps: { ...overlayProps, ...positionProps },
    state,
    triggerRef,
    triggerProps,
  };
}
