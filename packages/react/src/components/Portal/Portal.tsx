import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useLayoutEffect } from '@react-aria/utils';

export interface PortalProps {
	/**
	 * The ref of the element to append the children to.
	 */
	containerRef?: React.RefObject<HTMLElement>;
}

export const Portal: React.FC<React.PropsWithChildren<PortalProps>> = (props) => {
	const { children, containerRef } = props;

	const [container, setContainer] = React.useState<HTMLElement | null>(null);

	useLayoutEffect(() => {
		setContainer(containerRef ? containerRef.current : document.body);
	}, [containerRef]);

	return <>{container ? ReactDom.createPortal(children, container) : container}</>;
};
