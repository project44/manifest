import type { CSS } from '@project44-manifest/react-styles';

export type PaginationElement = 'div';

export interface PaginationProps {
  /**
   * The outer visible boundaries of the pagination list.
   *
   * @default 1
   */
  boundaries?: number;
  /**
   * The default page number (uncontrolled).
   *
   * @default 1
   */
  defaultPage?: number;
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The current page (controlled).
   */
  page?: number;
  /**
   * The number of rows rendered per page.
   *
   * @default 10
   */
  rowsPerPage?: number;
  /**
   * Whether to show page numbers buttons.
   *
   * @default true
   */
  showPageNumbers?: boolean;
  /**
   * The number of pages to display before and after the current selected page.
   *
   * @default 1
   */
  siblings?: number;
  /**
   * The total number of rows in the table.
   */
  totalRowCount?: number;
  /**
   * Callback executed on page change.
   */
  onChange?: (page: number) => void;
}
