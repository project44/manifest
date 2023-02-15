import { useOverlayTriggerState } from '@project44-manifest/react-overlay';
import type { PopoverTriggerState, PopoverTriggerStateProps } from './Popover.types';

export function usePopoverTriggerState(props: PopoverTriggerStateProps): PopoverTriggerState {
  const { defaultOpen, isOpen, onOpenChange } = props;

  const state = useOverlayTriggerState({ defaultOpen, isOpen, onOpenChange });

  return state;
}
