import { RowData } from '@tanstack/react-table';
import type { DataTable } from '../../DataTable.types';

export interface DataTableBodyProps<TData extends RowData> {
  table: DataTable<TData>;
}
