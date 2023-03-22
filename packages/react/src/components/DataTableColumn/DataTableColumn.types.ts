import type { CSS } from '@project44-manifest/react-styles';

type Align = 'center' | 'justify' | 'left' | 'right';
export type DataTableColumnElement = 'th';

export interface DataTableColumnProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Text alignment of the table column.
   *
   * @default 'left'
   */
  align?: Align;
  /**
   * The content of the column.
   */
  children?: React.ReactNode;
  /**
   * Whether the current column is actively sorted.
   */
  isActive?: boolean;
  /**
   * Whether the column supports sorting.
   */
  isSortable?: boolean;
  /**
   * Whether the column is pinned to the left. One column can be pinned to the left.
   */
  isPinnedLeft?: boolean;
  /**
   * Whether the column is pinned to the right. One column can be pinned to the right.
   */
  isPinnedRight?: boolean;
  /**
   * The sort direction of the column.
   *
   * @default 'asc'
   */
  sortDirection?: 'asc' | 'desc';
  /**
   * Callback executed on column click, used for column sort only.
   */
  onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}
