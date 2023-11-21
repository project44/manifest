import * as React from 'react';
import { RowData } from '@tanstack/react-table';
import { Pagination } from '../../../Pagination';
import type { DataTablePaginationProps } from './DataTablePagination.types';

export function DataTablePagination<TData extends RowData>(props: DataTablePaginationProps<TData>) {
  const { rowCount, table } = props;

  const { options, getPrePaginationRowModel, getState, setPageIndex } = table;
  const { paginationProps } = options;
  const {
    pagination: { pageSize = 10, pageIndex = 0 },
  } = getState();

  const parsedProps =
    typeof paginationProps === 'function' ? paginationProps({ table }) : paginationProps;

  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;

  const handlePageChange = React.useCallback(
    (page: number) => void setPageIndex(page - 1),
    [setPageIndex],
  );

  return (
    <div className="manifest-data-table__footer">
      <Pagination
        showLabel
        page={pageIndex + 1}
        rowsPerPage={pageSize}
        showPageNumbers={false}
        totalRowCount={totalRowCount}
        onChange={handlePageChange}
        {...parsedProps}
      />
    </div>
  );
}

DataTablePagination.displayName = 'DataTablePagination';
