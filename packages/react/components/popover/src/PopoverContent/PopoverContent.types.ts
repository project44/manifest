import type { PopoverElement, PopoverProps } from '../Popover.types';

export type PopoverContentElement = PopoverElement;

export interface PopoverContentProps extends Omit<PopoverProps, 'state' | 'triggerRef'> {
  wrapperRef?: React.RefObject<HTMLDivElement>;
}
