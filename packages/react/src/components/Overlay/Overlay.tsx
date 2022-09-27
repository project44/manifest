import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal, PortalProps } from '../Portal';

export interface OverlayProps extends PortalProps {
	/**
	 * The content to be rendered by the overlay
	 */
	children?: React.ReactNode;
	/**
	 * Whether the overlay is currently open.
	 */
	isOpen?: boolean;
}

export function Overlay(props: OverlayProps) {
	const { children, containerRef, isOpen } = props;

	const contents = (
		<CSSTransition in={isOpen} classNames="manifest-overlay" timeout={200} unmountOnExit>
			{children}
		</CSSTransition>
	);

	return <Portal containerRef={containerRef}>{contents}</Portal>;
}
