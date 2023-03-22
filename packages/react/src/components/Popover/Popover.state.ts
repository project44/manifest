import { useOverlayTriggerState } from '@react-stately/overlays';
import type { PopoverTriggerState, PopoverTriggerStateProps } from './Popover.types';

export function usePopoverTriggerState(props: PopoverTriggerStateProps): PopoverTriggerState {
  const state = useOverlayTriggerState(props);

  return state;
}
