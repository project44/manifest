import * as React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { PopoverContent } from './Popover.content';
import { PopoverElement, PopoverProps } from './Popover.types';

export const Popover = React.forwardRef((props, forwardedRef) => {
	const { children, isOpen = false, onEntered, onExited, ...other } = props;

	const [isExited, setExited] = React.useState(!isOpen);

	const handleEntered = React.useCallback(() => {
		onEntered?.();

		setExited(false);
	}, [onEntered, setExited]);

	const handleExited = React.useCallback(() => {
		onExited?.();

		setExited(true);
	}, [onExited, setExited]);

	if (!(isOpen || !isExited)) return null;

	return (
		<OverlayContainer>
			<PopoverContent
				ref={forwardedRef}
				isOpen={isOpen}
				onEntered={handleEntered}
				onExited={handleExited}
				{...other}
			>
				{children}
			</PopoverContent>
		</OverlayContainer>
	);
}) as ForwardRefComponent<PopoverElement, PopoverProps>;
