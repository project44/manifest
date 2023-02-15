import type { PopoverContentElement, PopoverContentProps } from './PopoverContent';

export type PopoverElement = PopoverContentElement;

export interface PopoverProps extends PopoverContentProps {
  /**
   * Handler that is called when the popover has finished entering.
   */
  onEntered?: () => void;
  /**
   * Handler that is called when the popover has finished exiting.
   */
  onExited?: () => void;
}
