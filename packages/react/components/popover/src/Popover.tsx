import * as React from 'react';
import { Overlay } from '@project44-manifest/react-overlay';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { PopoverProvider } from './Popover.context';
import type { PopoverElement, PopoverProps } from './Popover.types';
import { PopoverContent } from './PopoverContent';

export const Popover = React.forwardRef((props, forwardedRef) => {
  const {
    children,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    maxHeight,
    offset = 4,
    onClose,
    onEntered,
    onExited,
    placement = 'bottom',
    scrollRef,
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    shouldFlip = true,
    shouldUpdatePosition = true,
    state,
    triggerRef,
    ...other
  } = props;

  const context = React.useMemo(
    () => ({
      state,
      triggerRef,
    }),
    [state, triggerRef],
  );

  return (
    <PopoverProvider value={context}>
      <Overlay isOpen={state.isOpen} onEntered={onEntered} onExited={onExited}>
        <PopoverContent
          {...other}
          ref={forwardedRef}
          isDismissable={isDismissable}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          maxHeight={maxHeight}
          offset={offset}
          placement={placement}
          scrollRef={scrollRef}
          shouldCloseOnBlur={shouldCloseOnBlur}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          shouldFlip={shouldFlip}
          shouldUpdatePosition={shouldUpdatePosition}
          onClose={onClose}
        >
          {children}
        </PopoverContent>
      </Overlay>
    </PopoverProvider>
  );
}) as ForwardRefComponent<PopoverElement, PopoverProps>;
