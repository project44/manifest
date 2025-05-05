import { RowData } from '@tanstack/react-table';
import { DataTableCell } from '../DataTableCell';
import type { DataTableBodyProps } from './DataTableBody.types';

export function DataTableBody<TData extends RowData>(props: DataTableBodyProps<TData>) {
  const { table } = props;

  return (
    <tbody className="manifest-table__body">
      {table.getRowModel().rows.map((row) => {
        const { enableRowClick, onRowClick } = table.options;
        const isRowClickable =
          typeof enableRowClick === 'function'
            ? enableRowClick(row.original, row.id)
            : enableRowClick;

        return (
          <tr
            key={row.id}
            className={`manifest-table__row  ${row.depth > 0 ? 'manifest-table__child-row' : ''}`}
            style={
              // Apply style only if row is clickable and onRowClick is defined
              isRowClickable && onRowClick
                ? {
                    cursor: 'pointer',
                  }
                : {}
            }
            onClick={() => {
              if (isRowClickable) {
                onRowClick?.(row.original, row.id);
              }
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <DataTableCell key={cell.id} cell={cell} table={table} />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

DataTableBody.displayName = 'DataTableBody';
