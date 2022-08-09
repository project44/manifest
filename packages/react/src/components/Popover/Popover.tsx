import type { DOMProps, StyleProps } from '../../types';
import type { PlacementAxis } from '@react-types/overlays';
import * as React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { PopoverContext } from './Popover.context';
import { PopoverContent } from '../internal/PopoverContent';

type PopoverElement = React.ElementRef<'div'>;

interface PopoverProps extends DOMProps, StyleProps {
  /**
   * The content of the popover.
   */
  children?: React.ReactNode;
  /**
   * Whether to close the popover when the user interacts outside it.
   *
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Whether pressing the escape key to close the popover should be disabled.
   *
   * @default false
   */
  isKeyboardDismissDisabled?: boolean;
  /**
   * Whether the popover is open.
   */
  isOpen?: boolean;
  /**
   * Whether the popover should not behave as a modal.
   */
  isNonModal?: boolean;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: PlacementAxis;
  /**
   * Whether the popover should close when focus is lost or moves outside it.
   *
   * @default false
   */
  shouldCloseOnBlur?: boolean;
  /**
   * Handler that is called when the popover should close.
   */
  onClose?(): void;
  /**
   * When user interacts with the argument element outside of the overlay ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the overlay.
   * By default, onClose will always be called on interaction outside the overlay ref.
   */
  shouldCloseOnInteractOutside?(element: HTMLElement): boolean;
}

const Popover = React.forwardRef<PopoverElement, PopoverProps>((props, forwardedRef) => {
  const {
    children,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isNonModal,
    isOpen,
    onClose,
    placement = 'bottom',
    shouldCloseOnBlur = false,
    shouldCloseOnInteractOutside,
    ...other
  } = props;

  const context = {
    isDismissable,
    isKeyboardDismissDisabled,
    isNonModal,
    isOpen,
    onClose,
    placement,
    shouldCloseOnBlur,
    shouldCloseOnInteractOutside,
  };

  return (
    <PopoverContext.Provider value={context}>
      {isOpen && (
        <OverlayContainer>
          <PopoverContent {...other} ref={forwardedRef}>
            {children}
          </PopoverContent>
        </OverlayContainer>
      )}
    </PopoverContext.Provider>
  );
});

if (__DEV__) {
  Popover.displayName = 'ManifestPopover';
}

export { Popover };
export type { PopoverProps };
