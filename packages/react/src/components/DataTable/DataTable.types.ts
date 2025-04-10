/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CSS } from '@project44-manifest/react-styles';
import type {
  ColumnDef,
  ColumnPinningState,
  ExpandedState,
  OnChangeFn,
  PaginationState,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  Table,
} from '@tanstack/react-table';
import type { IconButtonProps } from '../button';
import type { CheckboxProps } from '../Checkbox';
import type { PaginationProps } from '../Pagination';

export { ColumnDef };

export interface DataTableState {
  /**
   * The state for pinned columns.
   */
  columnPinning: ColumnPinningState;
  /**
   * The state for expanded table rows.
   */
  expanded: ExpandedState;
  /**
   * The pagination state for the table.
   */
  pagination: PaginationState;
  /**
   * The row selection state for the table.
   */
  rowSelection: RowSelectionState;
  /**
   * The sorting state for the table.
   */
  sorting: SortingState;
}

export interface DataTable<TData extends RowData> extends Omit<Table<TData>, 'options'> {
  options: DataTableProps<TData>;
}

export interface DataTableProps<TData extends RowData> {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The data used to populate the table.
   */
  data: TData[];
  /**
   * A default ColumnDef applied to all components in the table.
   */
  defaultColumn?: Partial<ColumnDef<TData>>;
  /**
   * The column definition for the table.
   *
   * Should follow the `@tanstack/react-table` [ColumnDef](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  columns: ColumnDef<TData, string>[] | ColumnDef<TData>[];
  /**
   * The initial state of the table, can be set without controlling the state completely.
   */
  initialState?: Partial<DataTableState>;
  /**
   * Whether the table is currently loading data.
   */
  isLoading?: boolean;
  /**
   * Whether the checkbox for children row  is enabled.
   */
  enableCheckboxForChildren?: boolean;
  /**
   * Whether the table supports expanding all table rows.
   *
   * @default false
   */
  enableExpandAll?: boolean;
  /**
   * Whether the table supports row expansion.
   *
   * @default true
   */
  enableExpanding?: boolean;
  /**
   * Whether the table supports pagination.
   *
   * @default true
   */
  enablePagination?: boolean;
  /**
   * Whether the table supports pinned columns.
   *
   * @default true
   */
  enablePinning?: boolean;
  /**
   * Whether to enable multiple row selection for all rows in the table.
   *
   * Optionally pass in a function that given a row, returns whether to enable/disable row selection for the children in that row
   *
   * @default true
   */
  enableMultiRowSelection?: boolean | ((row: Row<TData>) => boolean);
  /**
   * Whether to enable row selection for all rows in the table.
   *
   * Optionally pass in a function that given a row, returns whether to enable/disable row selection for that row
   *
   * @default false
   */
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  /**
   * Whether the table supports selecting all table rows.
   *
   * @default true
   */
  enableSelectAll?: boolean;
  /**
   * Whether sorting is enabled for the table.
   *
   * @default true
   */
  enableSorting?: boolean;
  /**
   * Whether the sort can removed from columns
   *
   * @default true
   */
  enableSortingRemoval?: boolean;
  /**
   * Whether the table header should stick when scrolling vertically
   *
   * @default false
   */
  enableStickyHeader?: boolean;
  /**
   * Whether the canExpand icon is visible or not.
   * @default true
   */
  showCanExpandIcon?: boolean;
  /**
   * Props passed to the expand all button component
   */
  expandAllButtonProps?:
    | IconButtonProps
    | ((props: { table: DataTable<TData> }) => IconButtonProps);
  /**
   * Props passed to the expand button component
   */
  expandButtonProps?:
    | IconButtonProps
    | ((props: { table: DataTable<TData>; row: Row<TData> }) => IconButtonProps);
  /**
   * Whether the expanding state for the table is controlled.
   */
  manualExpanding?: boolean;
  /**
   * Whether the pagination state for the table is controlled.
   */
  manualPagination?: boolean;
  /**
   * Whether the sorting state for the table is controlled.
   */
  manualSorting?: boolean;
  /**
   * Enable this setting to automatically reset the expanded state of the table when expanding state changes.
   */
  autoResetExpanded?: boolean;
  /**
   * A total pageCount of the table (controlled).
   */
  pageCount?: number;
  /**
   * Props passed to the pagination component
   */
  paginationProps?: (props: {
    table: DataTable<TData>;
  }) =>
    | Partial<Omit<PaginationProps, 'rowsPerPage'>>
    | Partial<Omit<PaginationProps, 'rowsPerPage'>>;

  /**
   * prop to enable total footer
   */
  footerProps?: FooterPropsType;

  /**
   * The total number of rows for the total table (controlled).
   *
   * Used to display the total count in the table pagination
   */
  rowCount?: number;
  /**
   * Props passed to the select checkbox
   */
  selectCheckboxProps?:
    | CheckboxProps
    | ((props: { table: DataTable<TData>; row: Row<TData> }) => CheckboxProps);
  /**
   * Props passed to the select all checkbox
   */
  selectAllCheckboxProps?: CheckboxProps | ((props: { table: DataTable<TData> }) => CheckboxProps);
  /**
   * State object for the table (controlled).
   */
  state?: Partial<DataTableState>;
  /**
   * Handler that is called on expanded change.
   */
  onExpandedChange?: OnChangeFn<ExpandedState>;
  /**
   * Handler that is called on pagination change.
   */
  onPaginationChange?: OnChangeFn<PaginationState>;
  /**
   * Handler that is called on row selection change.
   */
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  /**
   * Handler that is called on sort change.
   */
  onSortingChange?: OnChangeFn<SortingState>;
  /**
   *  Handler that is invoked on scroll event on table container
   */
  onScroll?: (event: React.SyntheticEvent) => void;
  /**
   * Optional function used to access the sub rows for the table .
   * @default * (row: Row<TData>) => row?.subRows as TData[]
   */
  getSubRows?: (Row: Row<TData>) => TData[];
  /**
   * Optional function used to force all rows (or conditionally some rows) to be expandable.
   * @default * (row: Row<TData>) => boolean
   */
  getRowCanExpand?: (row: Row<TData>) => boolean;
}

export interface FooterPropsType {
  /**
   * Props passed to the Total footer component
   * if these prop is missing total footer wont be rendered
   */
  data: TotalsDataObj;
  /**
   * Props passed to the Total footer keyword
   *
   */
  keyword: string;
  /**
   * callBack function for passing value to totalcolumns
   * if these prop is missing total footer wont be rendered
   */
  callBackFunc: (
    data: TotalsDataObj,
    headerId: number | string,
    index: number,
    keyword: string,
  ) => any;
  /**
   * Whether the table header should stick when scrolling vertically
   *
   * @default false
   */
  enableSticky?: boolean;

  /**
   * To limit the footers we want to show in ui
   * start < end
   */
  footerDepthRange?: {
    start: number;
    end: number;
  };
}

export interface TotalsProps {
  totalsData: TotalsDataObj;
  totalsKeyword: string;
}

export type TotalsDataObj = Record<string, TotalsHeaderObj<any>>;

export type TotalsHeaderObj<T> = Record<string, T>;
