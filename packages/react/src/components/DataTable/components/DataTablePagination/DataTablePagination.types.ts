import { RowData } from '@tanstack/react-table';
import { PaginationProps } from '../../../Pagination';
import type { DataTable } from '../../DataTable.types';

export interface DataTablePaginationProps<TData extends RowData> extends PaginationProps {
  rowCount?: number;
  table: DataTable<TData>;
}
