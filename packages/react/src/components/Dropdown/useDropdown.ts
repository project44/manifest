import type { MenuTriggerType } from '@react-types/menu';
import type { Placement } from '@react-types/overlays';
import type { UsePopoverOptions } from '../Popover';
import * as React from 'react';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useMenuTrigger } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';

interface UseDropdownOptions extends Omit<UsePopoverOptions, 'type'> {
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

function useDropdown(options: UseDropdownOptions) {
  const {
    align: alignProp,
    closeOnSelect = true,
    direction: directionProp,
    isDisabled,
    placement: placementProp = 'bottom start',
    trigger = 'press',
    triggerRef: triggerRefProp,
    type = 'menu',
    ...popoverProps
  } = options;

  const _triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const triggerRef = triggerRefProp ?? _triggerRef;

  const state = useMenuTriggerState(options);

  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { type, trigger, isDisabled },
    state,
    triggerRef,
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

  const getMenuTriggerProps = React.useCallback(
    (props = {}, forwardedRef: React.ForwardedRef<HTMLButtonElement>) => {
      const completeProps = triggerRefProp?.current
        ? mergeProps(menuTriggerProps, props)
        : mergeProps(props, menuTriggerProps);

      return {
        ...completeProps,
        ref: mergeRefs(triggerRef, forwardedRef),
      };
    },
    [triggerRef, triggerRefProp, menuTriggerProps],
  );

  return {
    closeOnSelect,
    getMenuTriggerProps,
    menuRef,
    menuProps: { ...menuProps, autoFocus: state.focusStrategy || true },
    onClose: state.close,
    placement,
    popoverRef,
    popoverProps,
    state,
    triggerRef,
  };
}

export type { UseDropdownOptions };
export { useDropdown };
