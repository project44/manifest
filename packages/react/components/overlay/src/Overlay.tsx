import { Portal } from '@project44-manifest/react-portal';
import { CSSTransition } from '@project44-manifest/react-transition';
import type { OverlayProps } from './Overlay.types';

export function Overlay(props: OverlayProps) {
  const { children, containerRef, isOpen } = props;

  const contents = (
    <CSSTransition unmountOnExit classNames="manifest-overlay" in={isOpen} timeout={200}>
      {children}
    </CSSTransition>
  );

  return <Portal containerRef={containerRef}>{contents}</Portal>;
}