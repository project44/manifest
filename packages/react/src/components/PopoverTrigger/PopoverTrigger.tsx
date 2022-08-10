import * as React from 'react';
import { PopoverContext, usePopoverContext } from '../Popover';
import { mergeProps } from '@react-aria/utils';
import { Slot } from '@radix-ui/react-slot';

type PopoverTriggerElement = React.ElementRef<'button'>;

interface PopoverTriggerProps {
  children: React.ReactElement;
}

const PopoverTrigger = React.forwardRef<PopoverTriggerElement, PopoverTriggerProps>(
  (props, forwardedRef) => {
    const { children, ...other } = props;

    const { getTriggerProps, state } = usePopoverContext() as PopoverContext;

    return (
      <Slot
        {...getTriggerProps(
          mergeProps(other, { onPress: () => state.open() }),
          forwardedRef as React.RefObject<HTMLButtonElement>,
        )}
      >
        {children}
      </Slot>
    );
  },
);

export { PopoverTrigger };
