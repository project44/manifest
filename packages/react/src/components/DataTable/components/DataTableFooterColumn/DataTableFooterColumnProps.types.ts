import { Header, RowData } from '@tanstack/react-table';
import type { DataTable, TotalsDataObj } from '../../DataTable.types';

export interface DataTableFooterColumnProps<TData extends RowData, TVaue> {
  header: Header<TData, TVaue>;
  table: DataTable<TData>;
  totalObj: TotalsDataObj,
  getTotalValue?:(headerTotalObj: TotalsDataObj) => number | string,
}
