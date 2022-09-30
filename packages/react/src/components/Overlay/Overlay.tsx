import { CSSTransition } from 'react-transition-group';
import { Portal, PortalProps } from '../Portal';

export interface OverlayProps extends PortalProps {
	/**
	 * Whether the overlay is currently open.
	 */
	isOpen?: boolean;
}

export function Overlay(props: OverlayProps) {
	const { children, containerRef, isOpen } = props;

	const contents = (
		<CSSTransition unmountOnExit classNames="manifest-overlay" in={isOpen} timeout={200}>
			{children}
		</CSSTransition>
	);

	return <Portal containerRef={containerRef}>{contents}</Portal>;
}
