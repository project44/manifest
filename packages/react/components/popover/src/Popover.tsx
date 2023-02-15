import * as React from 'react';
import { Overlay } from '@project44-manifest/react-overlay';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import type { PopoverElement, PopoverProps } from './Popover.types';
import { PopoverContent } from './PopoverContent';

export const Popover = React.forwardRef((props, forwardedRef) => {
  const { children, onEntered, onExited, state, ...other } = props;

  return (
    <Overlay isOpen={state.isOpen} onEntered={onEntered} onExited={onExited}>
      <PopoverContent {...other} ref={forwardedRef} state={state}>
        {children}
      </PopoverContent>
    </Overlay>
  );
}) as ForwardRefComponent<PopoverElement, PopoverProps>;
