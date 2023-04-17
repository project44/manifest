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
   * Generate a localized label for the rows per page label (localization).
   *
   * @default `${from}-${to} of ${totalRowCount}`
   */
  getPaginationLabel?: ({
    count,
    from,
    to,
  }: {
    count: number;
    from: number;
    to: number;
  }) => React.ReactNode;
  /**
   * Generate screen reader friendly aria-labels for pagination items, used for internationalized strings.
   */
  getItemAriaLabel?: (
    type: 'next' | 'page' | 'previous',
    page?: number,
    isActive?: boolean,
  ) => string;
  /**
   * The label to render in the next button, used for internationalized strings.
   *
   * @default 'Next'
   */
  nextLabel?: string;
  /**
   * The current page (controlled).
   */
  page?: number;
  /**
   * The label to render in the previous button, used for internationalized strings.
   *
   * @default 'Previous'
   */
  previousLabel?: string;
  /**
   * The number of rows rendered per page.
   *
   * @default 10
   */
  rowsPerPage?: number;
  /**
   * Whether to show the pagination label.
   *
   * @default false
   */
  showLabel?: boolean;
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
