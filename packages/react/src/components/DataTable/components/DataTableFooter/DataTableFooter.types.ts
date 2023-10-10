/* eslint-disable @typescript-eslint/no-explicit-any */
import { RowData } from '@tanstack/react-table';
import type { DataTable, TotalsDataObj } from '../../DataTable.types';

export interface DataTableFooterProps<TData extends RowData> {
  enableStickyFooter?: boolean;
  table: DataTable<TData>;
  totalObj: TotalsDataObj,
  getTotalValue?:(headerTotalObj: any) => number | string,
}