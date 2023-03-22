import { CSSTransition } from 'react-transition-group';
import { Portal } from '../Portal';
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
