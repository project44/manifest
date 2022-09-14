import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { FocusScope } from '@react-aria/focus';
import { useStyles } from './Popover.styles';

export type PopoverElement = 'div';

export interface PopoverOptions<T extends As = PopoverElement> extends Options<T>, StyleProps {
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
  shouldCloseOnInteractOutside?(element: Element): boolean;
}

export type PopoverProps<T extends As = PopoverElement> = Props<PopoverOptions<T>>;

export const Popover = createComponent<PopoverOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isOpen,
    onClose,
    shouldCloseOnBlur = false,
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

  const { modalProps } = useModal({ isDisabled: true });

  const { className } = useStyles({ css });

  const classes = cx(className, classNameProp, {
    'manifest-popover': true,
    'manifest-popover--open': isOpen,
  });

  return (
    <FocusScope restoreFocus>
      <Comp
        {...mergeProps(overlayProps, modalProps, other)}
        className={classes}
        ref={mergeRefs(popoverRef, forwardedRef)}
        role="presentation"
      >
        <DismissButton onDismiss={onClose} />
        {children}
        <DismissButton onDismiss={onClose} />
      </Comp>
    </FocusScope>
  );
});
