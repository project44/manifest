import * as React from 'react';
import { useMenuTrigger } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';
import { mergeProps, mergeRefs } from '../../utils';
import { Overlay, useOverlayPosition } from '../Overlay';
import { Popover } from '../Popover';
import { DropdownProvider } from './Dropdown.context';
import type { DropdownProps } from './Dropdown.types';

export function Dropdown(props: DropdownProps) {
  const {
    defaultOpen,
    children,
    closeOnSelect,
    isOpen,
    offset = 4,
    placement = 'bottom start',
    shouldFlip,
    onOpenChange,
    trigger = 'press',
    type = 'menu',
    ...other
  } = props;

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const [menuTrigger, menu] = React.Children.toArray(children) as [
    React.ReactElement,
    React.ReactNode,
  ];

  const state = useMenuTriggerState({
    defaultOpen,
    isOpen,
    onOpenChange,
    closeOnSelect,
    shouldFlip,
    trigger,
  });
  const { menuTriggerProps, menuProps } = useMenuTrigger({ trigger, type }, state, triggerRef);

  const { overlayProps } = useOverlayPosition({
    isOpen: state.isOpen,
    offset,
    onClose: state.close,
    overlayRef: popoverRef,
    placement,
    shouldFlip,
    targetRef: triggerRef,
  });

  const handleClose = React.useCallback(() => void state.close(), [state]);

  const context = React.useMemo(
    () => ({
      closeOnSelect,
      menuProps: mergeProps(menuProps, { autoFocus: state.focusStrategy || true }),
      menuRef,
      onClose: handleClose,
    }),
    [closeOnSelect, handleClose, menuProps, menuRef, state.focusStrategy],
  );

  return (
    <DropdownProvider value={context}>
      {React.cloneElement(menuTrigger, {
        ...menuTriggerProps,
        ref:
          // eslint does not like accessing children refs
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
          mergeRefs(triggerRef, (menuTrigger as any).ref as React.RefObject<HTMLButtonElement>),
      })}
      <Overlay isOpen={state.isOpen}>
        <Popover
          {...mergeProps(overlayProps, other)}
          ref={popoverRef}
          isOpen={state.isOpen}
          onClose={handleClose}
        >
          {menu}
        </Popover>
      </Overlay>
    </DropdownProvider>
  );
}
