import { RowData } from '@tanstack/react-table';
import type { DataTable, footerPropsType } from '../../DataTable.types';

export interface DataTableFooterProps<TData extends RowData> {
  enableStickyFooter?: boolean;
  table: DataTable<TData>;
  footerProps: footerPropsType;
}
