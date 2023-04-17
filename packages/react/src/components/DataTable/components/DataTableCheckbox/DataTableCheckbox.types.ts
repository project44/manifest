import { Row, RowData } from '@tanstack/react-table';
import type { DataTable } from '../../DataTable.types';

export interface DataTableCheckboxProps<TData extends RowData> {
  row?: Row<TData>;
  table: DataTable<TData>;
}
