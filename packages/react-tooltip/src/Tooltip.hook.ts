import * as React from 'react';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { useTooltipTrigger } from '@react-aria/tooltip';
import { mergeProps } from '@project44-manifest/react-utils';
import type { TooltipProps, TooltipState } from './Tooltip.types';

export function useTooltip(state: TooltipState, props: TooltipProps) {
  const { isDisabled, placement, trigger } = props;

  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLElement>(null);

  const { tooltipProps, triggerProps } = useTooltipTrigger(
    { isDisabled, trigger },
    state,
    triggerRef,
  );
  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state?.isOpen,
    offset: 4,
    placement,
    overlayRef: tooltipRef,
    targetRef: triggerRef,
  });

  const { hoverProps } = useHover({
    onHoverStart: () => void state?.open(true),
    onHoverEnd: () => void state?.close(),
  });

  return {
    tooltipProps: mergeProps(tooltipProps, hoverProps, positionProps, { role: 'tooltip' }),
    tooltipRef,
    triggerProps: mergeProps(triggerProps),
    triggerRef,
  };
}

export type UseTooltipReturn = ReturnType<typeof useTooltip>;
