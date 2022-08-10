import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { usePopover, UsePopoverOptions } from './usePopover';
import { PopoverContext } from './Popover.context';

type PopoverElement = React.ElementRef<'div'>;

interface PopoverProps extends UsePopoverOptions, DOMProps, StyleProps {
  /**
   * The content of the popover.
   */
  children?: React.ReactNode[];
}

const Popover = React.forwardRef<PopoverElement, PopoverProps>((props, forwardedRef) => {
  const { children, ...other } = props;

  const context = usePopover({
    ...other,
    overlayRef: forwardedRef as React.RefObject<HTMLDivElement>,
  });

  const [trigger, content] = React.Children.toArray(children);

  return (
    <PopoverContext.Provider value={context}>
      {trigger}
      {context.isOpen && <OverlayContainer>{content}</OverlayContainer>}
    </PopoverContext.Provider>
  );
});

if (__DEV__) {
  Popover.displayName = 'ManifestPopover';
}

export { Popover };
export type { PopoverProps };
