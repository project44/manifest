import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { PopoverState, UsePopoverProps } from './Popover.types';

export function usePopover(state: PopoverState, props: UsePopoverProps) {
	const {
		maxHeight,
		offset = 8,
		onClose,
		placement = 'bottom',
		scrollRef,
		shouldFlip = true,
		shouldUpdatePosition = true,
		type = 'dialog',
	} = props;

	const overlayRef = React.useRef<HTMLDivElement>(null);
	const triggerRef = React.useRef<HTMLButtonElement>(null);

	const { triggerProps, overlayProps } = useOverlayTrigger({ type }, state, triggerRef);
	const { overlayProps: positionProps, updatePosition } = useOverlayPosition({
		isOpen: state.isOpen,
		maxHeight,
		offset,
		overlayRef,
		placement,
		scrollRef,
		shouldFlip,
		shouldUpdatePosition,
		targetRef: triggerRef,
	});

	const { buttonProps } = useButton({ onPress: state?.toggle, ...triggerProps }, triggerRef);

	const handleClose = React.useCallback(() => {
		onClose?.();

		state?.close();
	}, [onClose, state]);

	React.useLayoutEffect(() => {
		if (state.isOpen) {
			requestAnimationFrame(() => {
				updatePosition();
			});
		}
	}, [state, updatePosition]);

	return {
		onClose: handleClose,
		overlayRef,
		overlayProps: { ...overlayProps, ...positionProps },
		triggerRef,
		triggerProps: buttonProps,
	};
}

export type UsePopoverReturn = ReturnType<typeof usePopover>;
