import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

type PopoverTriggerElement = React.ElementRef<typeof PopoverPrimitive.Trigger>;
type PopoverTriggerNativeProps = React.ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>;

export type PopoverTriggerProps = PopoverTriggerNativeProps;

export const PopoverTrigger = React.forwardRef<PopoverTriggerElement, PopoverTriggerProps>(
  (props, forwardedRef) => <PopoverPrimitive.Trigger {...props} asChild ref={forwardedRef} />,
);
