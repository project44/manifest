import type { DOMRef, DOMRefValue } from '@react-types/shared';
import type { MenuTriggerType } from '@react-types/menu';
import type { Placement } from '@react-types/overlays';
import * as React from 'react';
import { useDOMRef, unwrapDOMRef } from '@react-spectrum/utils';
import { DropdownContext } from './Dropdown.context';
import { mergeProps } from '@react-aria/utils';
import { Popover } from '../Popover';
import { PressResponder } from '@react-aria/interactions';
import { useMenuTrigger } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';
import { useOverlayPosition } from '@react-aria/overlays';

interface DropdownProps {
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
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
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

const Dropdown = React.forwardRef((props: DropdownProps, forwardedRef: DOMRef<HTMLElement>) => {
  const {
    align: alignProp,
    children,
    closeOnSelect = true,
    direction: directionProp,
    offset = 4,
    placement: placementProp = 'bottom start',
    shouldFlip = true,
  } = props;

  const domRef = useDOMRef(forwardedRef);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const menuTriggerRef = domRef || triggerRef;
  const overlayRef = React.useRef<DOMRefValue<HTMLDivElement>>(null);

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

  const { overlayProps: positionProps } = useOverlayPosition({
    offset,
    isOpen: state.isOpen,
    onClose: state.close,
    overlayRef: unwrapDOMRef(overlayRef),
    placement,
    scrollRef: menuRef,
    shouldFlip,
    targetRef: menuTriggerRef,
  });

  return (
    <>
      <PressResponder {...menuTriggerProps} ref={menuTriggerRef} isPressed={state.isOpen}>
        {menuTrigger}
      </PressResponder>
      <Popover {...positionProps} isOpen={state.isOpen} onClose={state.close} ref={overlayRef}>
        <DropdownContext.Provider
          value={{
            closeOnSelect,
            menuProps: mergeProps(menuProps, { autoFocus: state.focusStrategy || true }),
            menuRef,
            onClose: state.close,
          }}
        >
          {menu}
        </DropdownContext.Provider>
      </Popover>
    </>
  );
});

if (__DEV__) {
  Dropdown.displayName = 'ManifestDropdown';
}

export { Dropdown };
export { DropdownProps };
