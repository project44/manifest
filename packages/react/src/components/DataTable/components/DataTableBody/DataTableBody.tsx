import { RowData } from '@tanstack/react-table';
import { DataTableCell } from '../DataTableCell';
import type { DataTableBodyProps } from './DataTableBody.types';

export function DataTableBody<TData extends RowData>(props: DataTableBodyProps<TData>) {
  const { table } = props;

  return (
    <tbody className="manifest-table__body">
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} className="manifest-table__row">
          {row.getVisibleCells().map((cell) => (
            <DataTableCell key={cell.id} cell={cell} table={table} />
          ))}
        </tr>
      ))}
    </tbody>
  );
}

DataTableBody.displayName = 'DataTableBody';
