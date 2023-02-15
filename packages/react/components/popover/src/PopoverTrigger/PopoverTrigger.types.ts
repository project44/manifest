import type { PopoverProps } from '../Popover.types';

export type PopoverTriggerElement = 'div';

export interface PopoverTriggerProps extends PopoverProps {
  /**
   * Whether the popover is open by default (uncontrolled).
   */
  defaultOpen?: boolean;
  /**
   * Whether pressing the escape key to close the popover should be disabled.
   *
   * @default false
   */
  /** Whether the popover is open by default (controlled). */
  isOpen?: boolean;
  /**
   * Handler that is called when the popover's open state changes.
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * Type of popover that is opened by the trigger.
   *
   * @default 'dialog'
   */
  type?: 'dialog' | 'grid' | 'listbox' | 'menu' | 'tree';
}
