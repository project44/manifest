import type { CSS } from '@project44-manifest/react-styles';

type Align = 'center' | 'justify' | 'left' | 'right';
export type TableCellElement = 'td';

export interface TableCellProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Text alignment of the table cell.
   *
   * @default 'left'
   */
  align?: Align;
}
