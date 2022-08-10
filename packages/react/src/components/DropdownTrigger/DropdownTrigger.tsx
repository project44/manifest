import * as React from 'react';
import { DropdownContext, useDropdownContext } from '../Dropdown';
import { PopoverTrigger } from '../PopoverTrigger';

type DropdownTriggerElement = React.ElementRef<'button'>;

type DropdownTriggerProps = React.PropsWithChildren<unknown>;

const DropdownTrigger = React.forwardRef<DropdownTriggerElement, DropdownTriggerProps>(
  (props, forwardedRef) => {
    const { children, ...other } = props;

    const { getMenuTriggerProps } = useDropdownContext() as DropdownContext;

    return (
      <PopoverTrigger {...getMenuTriggerProps(other, forwardedRef)}>{children}</PopoverTrigger>
    );
  },
);

export { DropdownTrigger };
