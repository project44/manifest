import { useOverlayTriggerState } from '@project44-manifest/react-overlay';
import type { PopoverTriggerState, PopoverTriggerStateProps } from './Popover.types';

export function usePopoverTriggerState(props: PopoverTriggerStateProps): PopoverTriggerState {
  const state = useOverlayTriggerState(props);

  return state;
}
