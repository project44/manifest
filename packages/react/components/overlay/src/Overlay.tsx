import { Portal } from '@project44-manifest/react-portal';
import { Fade } from '@project44-manifest/react-transition';
import type { OverlayProps } from './Overlay.types';

export function Overlay(props: OverlayProps) {
  const { children, containerRef, isOpen } = props;

  const contents = (
    <Fade appear unmountOnExit in={isOpen}>
      <div>{children}</div>
    </Fade>
  );

  return <Portal containerRef={containerRef}>{contents}</Portal>;
}
