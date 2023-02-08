import { useOverlayTriggerState } from '@react-stately/overlays';
import type { PopoverState, UsePopoverStateProps } from './Popover.types';

export function usePopoverState(props: UsePopoverStateProps): PopoverState {
  const { defaultOpen, isOpen, onOpenChange } = props;

  const state = useOverlayTriggerState({ defaultOpen, isOpen, onOpenChange });

  return state;
}
