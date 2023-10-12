import { Header, RowData } from '@tanstack/react-table';
import type { DataTable, TotalsProps } from '../../DataTable.types';

export interface DataTableFooterColumnProps<TData extends RowData, TVaue> {
  header: Header<TData, TVaue>;
  table: DataTable<TData>;
  totalObj: TotalsProps;
  getTotalValue?: (headerTotalObj: unknown) => number | string;
  index: number;
}
