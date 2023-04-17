import { RowData, Table } from '@tanstack/react-table';
import { createContext } from '../../utils';

export interface DataTableContext<TData extends RowData = unknown> {
  options: {
    enableStickyHeader?: boolean;
  };
  rowCount?: number;
  table: Table<TData>;
}

export const [DataTableProvider, useDataTable] = createContext<DataTableContext>({
  name: 'DataTableContext',
});
