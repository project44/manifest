import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs, Slot } from '@project44-manifest/react-utils';
import { TooltipContent } from './Tooltip.content';
import { useTooltip } from './Tooltip.hook';
import { useTooltipState } from './Tooltip.state';
import type { TooltipElement, TooltipProps } from './Tooltip.types';

export const Tooltip = React.forwardRef((props, forwardedRef) => {
	const {
		defaultOpen,
		children,
		delay = 250,
		isOpen,
		isDisabled,
		placement = 'bottom',
		onOpenChange,
		title,
		trigger,
		...other
	} = props;

	const state = useTooltipState({ defaultOpen, delay, isDisabled, isOpen, onOpenChange, trigger });
	const { tooltipProps, tooltipRef, triggerProps, triggerRef } = useTooltip(state, {
		defaultOpen,
		isDisabled,
		placement,
		trigger,
	});

	return (
		<>
			<Slot {...triggerProps} ref={triggerRef}>
				{children}
			</Slot>
			<AnimatePresence>
				{state.isOpen && (
					<TooltipContent
						{...mergeProps(tooltipProps, other)}
						ref={mergeRefs(tooltipRef, forwardedRef)}
					>
						{title}
					</TooltipContent>
				)}
			</AnimatePresence>
		</>
	);
}) as ForwardRefComponent<TooltipElement, TooltipProps>;
