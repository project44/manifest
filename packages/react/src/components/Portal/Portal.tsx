import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useIsomorphicLayoutEffect } from '../../hooks';
import type { PortalProps } from './Portal.types';

export function Portal(props: PortalProps) {
  const { children, containerRef } = props;

  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    setContainer(containerRef ? containerRef.current : document.body);
  }, [containerRef]);

  return container ? ReactDom.createPortal(children, container) : container;
}
