import * as React from 'react';
import { PopoverContext, usePopoverContext } from '../Popover';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { Slot } from '@radix-ui/react-slot';

type PopoverTriggerElement = React.ElementRef<'button'>;

type PopoverTriggerProps = React.PropsWithChildren<object>;

const PopoverTrigger = React.forwardRef<PopoverTriggerElement, PopoverTriggerProps>(
  (props, forwardedRef) => {
    const { children, ...other } = props;

    const { state, triggerRef, triggerProps } = usePopoverContext() as PopoverContext;

    return (
      <Slot
        {...mergeProps(triggerProps, { ...other, onPress: state.open })}
        ref={mergeRefs(triggerRef, forwardedRef)}
      >
        {children}
      </Slot>
    );
  },
);

export { PopoverTrigger };
