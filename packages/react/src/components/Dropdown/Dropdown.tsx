import type { MenuTriggerType } from '@react-types/menu';
import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { Popover, PopoverProps } from '../Popover';
import { DropdownContext } from './Dropdown.context';
import { mergeProps } from '@react-aria/utils';
import { Slot } from '@radix-ui/react-slot';
import { useMenuTrigger } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';

export interface DropdownProps
  extends Omit<PopoverProps, 'overlayRef' | 'scrollRef' | 'triggerRef'> {
  /**
   * The contents of the MenuTrigger - a trigger and a Menu.
   */
  children: React.ReactNode[];
  /**
   * Alignment of the menu relative to the trigger.
   *
   * @deprecated use placement instead
   */
  align?: 'end' | 'start';
  /**
   * Whether the dropdown closes when a selection is made.
   *
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Where the Menu opens relative to its trigger.
   *
   * @deprecated use placement instead
   */
  direction?: 'bottom' | 'top' | 'left' | 'right' | 'start' | 'end';
  /**
   * Whether menu trigger is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * How the menu is triggered.
   *
   * @default 'press'
   */
  trigger?: MenuTriggerType;
  /**
   * The type of menu that the menu trigger opens.
   *
   * @default 'menu'
   */
  type?: 'menu' | 'listbox';
}

export const Dropdown: React.FC<DropdownProps> = props => {
  const {
    align: alignProp,
    children,
    closeOnSelect = true,
    direction: directionProp,
    placement: placementProp = 'bottom start',
    trigger = 'press',
    type = 'menu',
    ...other
  } = props;

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const [menuTrigger, menu] = React.Children.toArray(children) as [
    React.ReactElement,
    React.ReactNode,
  ];

  const state = useMenuTriggerState(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger({ trigger }, state, triggerRef);

  const placement = React.useMemo(() => {
    if (alignProp || directionProp) {
      console.warn('align and direction are deprecated, please use placement');
    }

    if (placementProp) {
      return placementProp;
    }

    const align = alignProp ?? 'start';
    const direction = directionProp ?? 'bottom';

    let initialPlacement: Placement;

    switch (direction) {
      case 'left':
      case 'right':
      case 'start':
      case 'end':
        initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}` as Placement;
        break;
      case 'bottom':
      case 'top':
      default:
        initialPlacement = `${direction} ${align}` as Placement;
    }

    return initialPlacement;
  }, [alignProp, directionProp, placementProp]);

  return (
    <DropdownContext.Provider
      value={{
        closeOnSelect,
        menuProps: mergeProps(menuProps, { autoFocus: state.focusStrategy || true }),
        menuRef,
        onClose: state.close,
      }}
    >
      <Slot {...menuTriggerProps} ref={triggerRef}>
        {menuTrigger}
      </Slot>
      <Popover
        {...other}
        isOpen={state.isOpen}
        onClose={state.close}
        placement={placement}
        overlayRef={overlayRef}
        triggerRef={triggerRef}
        type={type}
      >
        {menu}
      </Popover>
    </DropdownContext.Provider>
  );
};
