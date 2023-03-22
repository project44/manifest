import type { MenuTriggerType } from '@react-types/menu';
import type { Placement } from '../Overlay';

export interface DropdownProps {
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
   * Whether the overlay is open by default (uncontrolled).
   */
  defaultOpen?: boolean;
  /**
   * Whether menu trigger is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the overlay is open by default (controlled).
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
   * Handler that is called when the overlay's open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void;
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
  type?: 'listbox' | 'menu';
}
