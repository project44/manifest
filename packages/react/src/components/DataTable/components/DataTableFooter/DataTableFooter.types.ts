import { RowData } from '@tanstack/react-table';
import type { DataTable, TotalsHeaderObj, TotalsProps } from '../../DataTable.types';

export interface DataTableFooterProps<TData extends RowData> {
  enableStickyFooter?: boolean;
  table: DataTable<TData>;
  totalObj: TotalsProps;
  getTotalValue?: (headerTotalObj: TotalsHeaderObj) => number | string;
}
