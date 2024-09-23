import { Row, RowData } from '@tanstack/react-table';
import type { DataTable } from '../../DataTable.types';

export interface DataTableExpandButtonProps<TData extends RowData> {
  row: Row<TData>;
  table: DataTable<TData>;
  showCanExpandIcon: boolean;
}
