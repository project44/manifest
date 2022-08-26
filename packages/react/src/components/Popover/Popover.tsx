import type { Placement } from '@react-types/overlays';
import type { StyleProps } from '../../types';
import * as React from 'react';
import {
  DismissButton,
  OverlayContainer,
  useOverlay,
  useOverlayPosition,
} from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { useStyles } from './Popover.styles';

export interface PopoverProps extends StyleProps {
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
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   *
   * @default 4
   */
  offset?: number;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * A ref for the scrollable region within the overlay.
   *
   * @default popoverRef
   */
  scrollRef?: React.RefObject<HTMLElement>;
  /**
   * Whether the popover should close when focus is lost or moves outside it.
   *
   * @default false
   */
  shouldCloseOnBlur?: boolean;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The ref for the element which the overlay positions itself with respect to.
   */
  targetRef: React.RefObject<HTMLElement>;
  /**
   * Handler that is called when the popover should close.
   */
  onClose?(): void;
  /**
   * Callback fired after the "entered" status is applied.
   */
  onEntered?(): void;
  /**
   * Callback fired after the "exited" status is applied.
   */
  onExited?(): void;
  /**
   * When user interacts with the argument element outside of the overlay ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the overlay.
   * By default, onClose will always be called on interaction outside the overlay ref.
   */
  shouldCloseOnInteractOutside?(element: Element): boolean;
}

export const Popover = createComponent<'div', PopoverProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isOpen,
    offset = 4,
    onClose,
    placement: placementProp = 'bottom',
    scrollRef,
    shouldFlip = true,
    shouldCloseOnBlur = false,
    targetRef,
    ...other
  } = props;

  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { overlayProps } = useOverlay(
    {
      ...props,
      isDismissable: isDismissable && isOpen,
      isKeyboardDismissDisabled,
      shouldCloseOnBlur,
    },
    popoverRef,
  );

  const { overlayProps: positionProps } = useOverlayPosition({
    offset,
    onClose,
    overlayRef: popoverRef,
    placement: placementProp,
    scrollRef,
    shouldFlip,
    targetRef,
  });

  const { className } = useStyles({ css });

  const classes = cx(className, classNameProp, {
    'manifest-popover': true,
    'manifest-popover--open': isOpen,
  });

  return (
    <OverlayContainer>
      <FocusScope restoreFocus>
        <Comp
          {...mergeProps(overlayProps, positionProps, other)}
          className={classes}
          ref={mergeRefs(popoverRef, forwardedRef)}
          role="presentation"
          style={{
            ...positionProps.style,
            ...other.style,
          }}
        >
          <DismissButton onDismiss={onClose} />
          {children}
          <DismissButton onDismiss={onClose} />
        </Comp>
      </FocusScope>
    </OverlayContainer>
  );
});
