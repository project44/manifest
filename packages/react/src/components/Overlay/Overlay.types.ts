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
   * The ref of the element to append the children to.
   */
  containerRef?: React.RefObject<HTMLElement>;
  /**
   * Whether the overlay is open.
   */
  isOpen?: boolean;
  /**
   * Handler fired after the "entered" status is applied. An extra parameter
   * isAppearing is supplied to indicate if the enter stage is occurring on
   * the initial mount
   */
  onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
  /**
   * Handler fired after the "exited" status is applied.
   */
  onExited?: (node: HTMLElement) => void;
}
