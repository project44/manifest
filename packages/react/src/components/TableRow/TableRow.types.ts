import type { CSS } from '@project44-manifest/react-styles';

export type TableRowElement = 'tr';

export interface TableRowProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Handler called on mouse enter.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  /**
   * Handler called on mouse leave.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}
