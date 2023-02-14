import type { FadeProps } from '@project44-manifest/react-transition';

export interface OverlayProps extends FadeProps {
  /**
   * Whether the overlay is open.
   */
  isOpen?: boolean;
  /**
   * The ref of the element to append the children to.
   */
  containerRef?: React.RefObject<HTMLElement>;
}
