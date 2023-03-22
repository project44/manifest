import { ReactNode } from 'react';
import type { CSS } from '@project44-manifest/react-styles';
import { DataTableContext } from './DataTable.context';

export type DataTableElement = 'div';

export interface DataTableColumn {
  key: string;
  header: string;
  isSortable?: boolean;
  isPinnedLeft?: boolean;
  isPinnedRight?: boolean;
}

export interface DataTableProps extends DataTableContext {
  /**
   * Column definitions for the table
   */
  columns: DataTableColumn[];
  /**
   * Theme aware style object
   */
  css?: CSS;

  /**
   * Current page number
   */
  currentPage: number;

  /**
   * Visually compact vertical spacing. Defaults to false
   */
  isDense?: boolean;

  /**
   * Callback for when the page changes
   * @param page The new page number
   */
  onPageChange: (page: number) => void;

  /**
   * Callback for when the sort order changes
   * @param column The name of the column to sort by
   */
  onSort: (column: string, isAscending: boolean) => void;

  /**
   * Rows data for the table
   */
  rows: Record<string, ReactNode>[];

  /**
   * Total number of rows in the data set. Used for pagination
   */
  totalRowCount: number;
}
