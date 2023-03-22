import * as React from 'react';
import { useOverlayPosition } from '@react-aria/overlays';
import { useTooltipTrigger } from '@react-aria/tooltip';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Fade } from '../Fade';
import { TooltipContent } from '../TooltipContent';
import { TooltipProvider } from './Tooltip.context';
import type { TooltipElement, TooltipProps } from './Tooltip.types';

export const Tooltip = React.forwardRef((props, forwardedRef) => {
  const {
    defaultOpen,
    children,
    delay = 250,
    isOpen,
    isDisabled,
    placement = 'bottom',
    onOpenChange,
    title,
    trigger,
    ...other
  } = props;

  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLElement>(null);

  const state = useTooltipTriggerState({
    defaultOpen,
    delay,
    isDisabled,
    isOpen,
    onOpenChange,
    trigger,
  });

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

  return (
    <>
      {React.cloneElement(children, {
        ...triggerProps,
        ref: triggerRef,
      })}

      <TooltipProvider
        value={{ tooltipProps: { ...tooltipProps, ...positionProps }, tooltipRef, state }}
      >
        <Fade appear mountOnEnter unmountOnExit in={state.isOpen} style={{ position: 'absolute' }}>
          <TooltipContent {...other} ref={forwardedRef}>
            {title}
          </TooltipContent>
        </Fade>
      </TooltipProvider>
    </>
  );
}) as ForwardRefComponent<TooltipElement, TooltipProps>;
