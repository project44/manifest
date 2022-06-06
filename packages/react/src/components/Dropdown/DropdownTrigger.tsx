import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';

type DropdownTriggerElement = React.ElementRef<typeof DropdownPrimitive.Trigger>;
type DropdownTriggerNativeProps = React.ComponentPropsWithRef<typeof DropdownPrimitive.Trigger>;

export type DropdownTriggerProps = DropdownTriggerNativeProps;

export const DropdownTrigger = React.forwardRef<DropdownTriggerElement, DropdownTriggerProps>(
  (props, forwardedRef) => <DropdownPrimitive.Trigger {...props} asChild ref={forwardedRef} />,
);
