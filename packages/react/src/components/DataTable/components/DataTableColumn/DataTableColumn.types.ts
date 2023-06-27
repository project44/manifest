import { Header, RowData } from '@tanstack/react-table';
import type { DataTable } from '../../DataTable.types';

export interface DataTableColumnProps<TData extends RowData, TVaue> {
  header: Header<TData, TVaue>;
  table: DataTable<TData>;
}
