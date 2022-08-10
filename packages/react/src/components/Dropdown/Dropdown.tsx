import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { DropdownContext } from './Dropdown.context';
import { mergeProps } from '@react-aria/utils';
import { Popover } from '../Popover';
import { Slot } from '@radix-ui/react-slot';
import { useMenuTrigger } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';

interface DropdownProps {
  /**
   * Alignment of the menu relative to the trigger.
   *
   * @deprecated use placement instead
   */
  align?: 'end' | 'start';
  /**
   * The contents of the MenuTrigger - a trigger and a Menu.
   */
  children: React.ReactNode[];
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
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
}

const Dropdown: React.FC<DropdownProps> = props => {
  const {
    align: alignProp,
    children,
    closeOnSelect = true,
    direction: directionProp,
    placement: placementProp = 'bottom start',
  } = props;

  const menuRef = React.useRef<HTMLUListElement>(null);
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);

  const [menuTrigger, menu] = React.Children.toArray(children) as [
    React.ReactElement,
    React.ReactNode,
  ];

  const state = useMenuTriggerState(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { trigger: 'press' },
    state,
    menuTriggerRef,
  );

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
      <Slot {...menuTriggerProps} ref={menuTriggerRef}>
        {menuTrigger}
      </Slot>
      <Popover
        isOpen={state.isOpen}
        onClose={state.close}
        placement={placement}
        scrollRef={menuRef}
        triggerRef={menuTriggerRef}
      >
        {menu}
      </Popover>
    </DropdownContext.Provider>
  );
};

if (__DEV__) {
  Dropdown.displayName = 'ManifestDropdown';
}

export { Dropdown };
export { DropdownProps };
