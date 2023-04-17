import { RowData } from '@tanstack/react-table';
import type { DataTable } from '../../DataTable.types';

export interface DataTableHeaderProps<TData extends RowData> {
  enableStickyHeader?: boolean;
  table: DataTable<TData>;
}
