import * as React from 'react';
import { useOverlayTrigger } from '@react-aria/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { Popover } from '../Popover';
import type { PopoverTriggerElement, PopoverTriggerProps } from './PopoverTrigger.types';

export const PopoverTrigger = React.forwardRef((props, forwardRef) => {
  const { children, defaultOpen, isOpen, onOpenChange, type = 'dialog', ...other } = props;

  const [trigger, content] = React.Children.toArray(children) as [
    React.ReactElement,
    React.ReactElement,
  ];

  const triggerRef = React.useRef<HTMLDivElement>(null);

  const mergedRef = useMergedRef(triggerRef, forwardRef);

  const state = useOverlayTriggerState({ defaultOpen, isOpen, onOpenChange });
  const { triggerProps, overlayProps } = useOverlayTrigger({ type }, state, triggerRef);

  return (
    <>
      {React.cloneElement(trigger, { ...triggerProps, ref: mergedRef })}
      <Popover {...other} state={state} triggerRef={triggerRef}>
        {React.cloneElement(content, overlayProps)}
      </Popover>
    </>
  );
}) as ForwardRefComponent<PopoverTriggerElement, PopoverTriggerProps>;
