export interface PortalProps {
  /**
   * The content of the portal.
   */
  children: React.ReactNode;
  /**
   * The ref of the element to append the children to.
   */
  containerRef?: React.RefObject<HTMLElement>;
}
