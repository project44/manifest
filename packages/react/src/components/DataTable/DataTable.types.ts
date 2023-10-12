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
  enableTotalFooter?: boolean;
  /**
   * Props passed to the Total footer component
   * if these prop is missing total footer wont be rendered
   */
  totalsData?: TotalsDataObj;
  /**
   * Props passed to the Total footer keyword
   *
   */
  totalsKeyword?: string;
  /**
   * callBack function for passing value to totalcolumns
   * if these prop is missing total footer wont be rendered
   */
  getTotalValue?: (headerTotalObj: TotalsHeaderObj) => number | string;
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
}

export interface TotalsProps {
  totalsData: TotalsDataObj;
  totalsKeyword: string;
}

export type TotalsDataObj = Record<string, TotalsHeaderObj<unknown>>;

export type TotalsHeaderObj<T> = Record<string, T>;
