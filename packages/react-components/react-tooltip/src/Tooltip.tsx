import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs, Slot } from '@project44-manifest/react-utils';
import { TooltipContent } from './Tooltip.content';
import { useTooltip } from './Tooltip.hook';
import { useTooltipState } from './Tooltip.state';
import { useStyles } from './Tooltip.styles';
import { TooltipElement, TooltipProps } from './Tooltip.types';

export const Tooltip = React.forwardRef((props, forwardedRef) => {
	const {
		defaultOpen,
		children,
		className: classNameProp,
		classes: classesProp,
		css,
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

	const { classes, cx } = useStyles(props, {
		name: 'tooltip',
		classes: classesProp,
		slots: { root: [] },
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
						className={cx(classes.root, classNameProp)}
					>
						{title}
					</TooltipContent>
				)}
			</AnimatePresence>
		</>
	);
}) as ForwardRefComponent<TooltipElement, TooltipProps>;
