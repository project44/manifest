import { useTooltipTriggerState } from '@react-stately/tooltip';
import type { TooltipProps, TooltipState } from './Tooltip.types';

export function useTooltipState(props: TooltipProps): TooltipState {
  const { defaultOpen, delay, isOpen, isDisabled, onOpenChange, trigger } = props;

  const state = useTooltipTriggerState({
    defaultOpen,
    delay,
    isDisabled,
    isOpen,
    onOpenChange,
    trigger,
  });

  return state;
}
