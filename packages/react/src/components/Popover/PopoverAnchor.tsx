import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

type PopoverAnchorElement = React.ElementRef<typeof PopoverPrimitive.Anchor>;
type PopoverAnchorNativeProps = React.ComponentPropsWithRef<typeof PopoverPrimitive.Anchor>;

export type PopoverAnchorProps = PopoverAnchorNativeProps;

export const PopoverAnchor = React.forwardRef<PopoverAnchorElement, PopoverAnchorProps>(
  (props, forwardedRef) => <PopoverPrimitive.Anchor {...props} asChild ref={forwardedRef} />,
);
