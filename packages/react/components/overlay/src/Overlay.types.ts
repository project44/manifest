export type Placement =
  | 'bottom end'
  | 'bottom left'
  | 'bottom right'
  | 'bottom start'
  | 'bottom'
  | 'end bottom'
  | 'end top'
  | 'end'
  | 'left bottom'
  | 'left top'
  | 'left'
  | 'right bottom'
  | 'right top'
  | 'right'
  | 'start bottom'
  | 'start top'
  | 'start'
  | 'top end'
  | 'top left'
  | 'top right'
  | 'top start'
  | 'top';

export interface OverlayProps {
  /**
   * The overlay to render in the portal.
   */
  children: React.ReactNode;
  /**
   * Whether the overlay is open.
   */
  isOpen?: boolean;
  /**
   * The ref of the element to append the children to.
   */
  containerRef?: React.RefObject<HTMLElement>;
}
