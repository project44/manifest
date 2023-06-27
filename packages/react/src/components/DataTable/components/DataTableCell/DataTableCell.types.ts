import { Cell, RowData } from '@tanstack/react-table';
import type { DataTable } from '../../DataTable.types';

export interface DataTableCellProps<TData extends RowData, TVaue> {
  cell: Cell<TData, TVaue>;
  table: DataTable<TData>;
}
