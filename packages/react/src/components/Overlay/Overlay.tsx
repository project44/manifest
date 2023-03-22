import { CSSTransition } from 'react-transition-group';
import { Portal } from '../Portal';
import { Provider } from '../Provider';
import type { OverlayProps } from './Overlay.types';

export function Overlay(props: OverlayProps) {
  const { children, containerRef, isOpen } = props;

  const contents = (
    <Provider>
      <CSSTransition unmountOnExit classNames="manifest-overlay" in={isOpen} timeout={200}>
        {children}
      </CSSTransition>
    </Provider>
  );

  return <Portal containerRef={containerRef}>{contents}</Portal>;
}
