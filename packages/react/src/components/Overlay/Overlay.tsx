import { Overlay as ReactAriaOverlay } from '@react-aria/overlays';
import { Provider } from '../Provider';
import type { OverlayProps } from './Overlay.types';

export function Overlay(props: OverlayProps) {
  const { children, containerRef, isOpen } = props;

  const portalContainer = containerRef?.current;

  return (
    <ReactAriaOverlay portalContainer={portalContainer!}>
      {isOpen && <Provider>{children}</Provider>}
    </ReactAriaOverlay>
  );
}
