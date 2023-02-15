import * as React from 'react';
import { Overlay as ReactAriaOverlay } from '@react-aria/overlays';
import { Provider } from '@project44-manifest/react-provider';
import { Fade } from '@project44-manifest/react-transition';
import type { OverlayProps } from './Overlay.types';

export const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>((props, forwardedRef) => {
  const { children, containerRef, isOpen, onEntered, onExited, ...other } = props;

  const [exited, setExited] = React.useState(!isOpen);

  const handleEntered = React.useCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      setExited(false);

      onEntered?.(node, isAppearing);
    },
    [onEntered],
  );

  const handleExited = React.useCallback(
    (node: HTMLElement) => {
      setExited(true);

      onExited?.(node);
    },
    [onExited],
  );

  const mountOverlay = isOpen || !exited;

  if (!mountOverlay) return null;

  return (
    <ReactAriaOverlay portalContainer={containerRef?.current as Element}>
      <Provider ref={forwardedRef} style={{ background: 'transparent', isolation: 'isolate' }}>
        <Fade {...other} in={isOpen} onEntered={handleEntered} onExited={handleExited}>
          <div>{children}</div>
        </Fade>
      </Provider>
    </ReactAriaOverlay>
  );
});
