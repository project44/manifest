import * as React from 'react';
import { mergeProps } from '@project44-manifest/react-utils';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { usePopoverContext } from '../Popover.context';
import type { PopoverTriggerProps } from './PopoverTrigger.types';

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props, forwardedRef) => {
    const { children, ...other } = props;

    const child = React.Children.only(children);

    const { triggerProps, triggerRef } = usePopoverContext();

    const nodeRef = useMergedRef(
      triggerRef,
      (
        child as typeof children & {
          ref: React.MutableRefObject<HTMLButtonElement> | React.RefCallback<HTMLButtonElement>;
        }
      ).ref,
      forwardedRef,
    );

    return React.cloneElement(child as React.ReactElement, {
      ...mergeProps(triggerProps, other),
      ref: nodeRef,
    });
  },
);
