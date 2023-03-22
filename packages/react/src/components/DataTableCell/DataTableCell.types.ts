import type { CSS } from '@project44-manifest/react-styles';

type Align = 'center' | 'justify' | 'left' | 'right';
export type DataTableCellElement = 'td';

export interface DataTableCellProps {
  /**
   * Text alignment of the table cell.
   *
   * @default 'left'
   */
  align?: Align;
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether the cell is pinned to the left side of the table.
   */
  isPinnedLeft?: boolean;
  /**
   * Whether the cell is pinned to the right side of the table.
   */
  isPinnedRight?: boolean;
}
