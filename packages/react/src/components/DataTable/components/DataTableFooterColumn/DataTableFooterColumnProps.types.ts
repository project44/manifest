import { Header, RowData } from '@tanstack/react-table';
import type { DataTable, footerPropsType } from '../../DataTable.types';

export interface DataTableFooterColumnProps<TData extends RowData, TVaue> {
  header: Header<TData, TVaue>;
  table: DataTable<TData>;
  index: number;
  footerProps : footerPropsType;
}
