import * as React from 'react';
import { TooltipTriggerState } from '@react-stately/tooltip';
import { createContext } from '../../utils';

export interface TooltipContext {
  state: TooltipTriggerState;
  tooltipProps: React.HTMLAttributes<HTMLElement>;
  tooltipRef: React.RefObject<HTMLDivElement>;
}

export const [TooltipProvider, useTooltipContext] = createContext<TooltipContext>({
  name: 'TooltipContext',
});
