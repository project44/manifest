import { useOverlayTriggerState } from '@react-stately/overlays';
import type { PopoverTriggerState, PopoverTriggerStateProps } from './Popover.types';

export function usePopoverTriggerState(props: PopoverTriggerStateProps): PopoverTriggerState {
  const { defaultOpen, isOpen, onOpenChange } = props;

  const state = useOverlayTriggerState({ defaultOpen, isOpen, onOpenChange });

  return state;
}
