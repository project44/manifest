/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  RowData,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import {
  DataTableBody,
  DataTableCheckbox,
  DataTableExpandAllButton,
  DataTableExpandButton,
  DataTableHeader,
  DataTablePagination,
} from './components';
import { DataTableFooter } from './components/DataTableFooter/DataTableFooter';
import { StyledDataTable } from './DataTable.styles';
import type { DataTable, DataTableProps } from './DataTable.types';

export function DataTable<TData extends RowData>(props: DataTableProps<TData>) {
  const {
    data: dataProp,
    defaultColumn = {
      minSize: 40,
      maxSize: 1000,
      size: 180,
    },
    columns: columnsProp,
    enableExpandAll = true,
    enableExpanding = false,
    enableMultiRowSelection = true,
    enablePagination = true,
    enablePinning = false,
    enableRowSelection = false,
    enableSelectAll = true,
    enableSorting = true,
    enableStickyHeader = false,
    expandAllButtonProps = {},
    expandButtonProps = {},
    initialState,
    isLoading,
    manualExpanding,
    manualPagination: manualPaginationProp,
    manualSorting,
    pageCount,
    paginationProps = {},
    enableTotalFooter = false,
    totalsProps = {},
    getTotalValue,
    selectAllCheckboxProps = {},
    selectCheckboxProps = {},
    rowCount,
    state,
    onExpandedChange,
    onPaginationChange,
    onRowSelectionChange,
    onSortingChange,
    ...other
  } = props;

  let manualPagination = manualPaginationProp;

  if (!enablePagination && manualPagination === undefined) {
    manualPagination = true;
  }

  const columns = React.useMemo<ColumnDef<TData>[]>(
    () =>
      [
        enableExpanding && {
          id: 'manifest-data-table-row-expand',
          // eslint-disable-next-line react/no-unstable-nested-components
          header: ({ table }: { table: DataTable<TData> }) =>
            enableExpandAll && <DataTableExpandAllButton table={table} />,
          // eslint-disable-next-line react/no-unstable-nested-components
          cell: ({ row, table }: { row: Row<TData>; table: DataTable<TData> }) => (
            <DataTableExpandButton row={row} table={table} />
          ),
          size: 40,
        },
        enableRowSelection && {
          id: 'manifest-data-table-row-select',
          // eslint-disable-next-line react/no-unstable-nested-components
          header: ({ table }: { table: DataTable<TData> }) =>
            enableSelectAll && <DataTableCheckbox table={table} />,
          // eslint-disable-next-line react/no-unstable-nested-components
          cell: ({ row, table }: { row: Row<TData>; table: DataTable<TData> }) => (
            <DataTableCheckbox row={row} table={table} />
          ),
          size: 40,
        },
        ...columnsProp,
      ].filter(Boolean) as ColumnDef<TData>[],
    [columnsProp, enableExpandAll, enableExpanding, enableRowSelection, enableSelectAll],
  );

  const data: TData[] = React.useMemo(
    () =>
      isLoading && !dataProp.length
        ? ([
            ...Array.from({
              length: state?.pagination?.pageSize || initialState?.pagination?.pageSize || 10,
            }).fill(null),
          ] as TData[])
        : dataProp,
    [dataProp, initialState?.pagination?.pageSize, state?.pagination?.pageSize, isLoading],
  );

  const table = useReactTable({
    columns,
    data,
    defaultColumn,
    enableExpandAll,
    enableExpanding,
    enablePinning,
    enableMultiRowSelection,
    enableRowSelection,
    enableSelectAll,
    enableSorting,
    enableStickyHeader,
    expandAllButtonProps,
    expandButtonProps,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getSubRows: (row: Row<TData>) => row?.subRows as TData[],
    initialState,
    isLoading,
    manualExpanding,
    manualPagination,
    manualSorting,
    paginationProps,
    rowCount,
    selectAllCheckboxProps,
    selectCheckboxProps,
    state,
    ...(manualExpanding && { onExpandedChange }),
    ...(manualPagination && { onPaginationChange }),
    ...(manualSorting && { onSortingChange }),
  } as TableOptions<TData>) as DataTable<TData>;
  return (
    <StyledDataTable className="manifest-data-table" {...other}>
      <div
        className={cx('manifest-data-table__container', {
          'manifest-data-table__container--sticky-header': !!enableStickyHeader,
        })}
      >
        <table className="manifest-table">
          <DataTableHeader table={table} />
          <DataTableBody table={table} />
          {enableTotalFooter && <DataTableFooter getTotalValue={getTotalValue} table={table} totalObj={totalsProps}/>}
        </table>
      </div>
      <DataTablePagination table={table} {...paginationProps} />
    </StyledDataTable>
  );
}

export const createDataTableColumnHelper = createColumnHelper;
