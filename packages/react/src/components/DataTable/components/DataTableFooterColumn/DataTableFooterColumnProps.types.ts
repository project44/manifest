import { Header, RowData } from '@tanstack/react-table';
import type { DataTable, TotalsHeaderObj, TotalsProps } from '../../DataTable.types';

export interface DataTableFooterColumnProps<TData extends RowData, TVaue> {
  header: Header<TData, TVaue>;
  table: DataTable<TData>;
  totalObj: TotalsProps;
  getTotalValue?: (headerTotalObj: TotalsHeaderObj) => number | string;
  index: number;
}
