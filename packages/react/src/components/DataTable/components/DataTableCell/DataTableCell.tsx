import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { flexRender, RowData } from '@tanstack/react-table';
import { Skeleton } from '../../../Skeleton';
import { getColumnLayoutStyles } from '../../utils';
import { DataTableCellProps } from './DataTableCell.types';

export function DataTableCell<TData extends RowData, TVaue>(
  props: DataTableCellProps<TData, TVaue>,
) {
  const { cell, table } = props;

  const styles: React.CSSProperties = getColumnLayoutStyles(table, cell.column);
  const isNested = cell.column.id === 'manifest-data-table-row-expand';

  return (
    <td
      className={cx('manifest-table__cell', {
        'manifest-table__cell--pinned': cell.column.getIsPinned(),
      })}
      style={{ ...styles, paddingLeft: isNested ? `${cell.row.depth + 0.75}rem` : undefined }}
    >
      {table.options.isLoading && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Skeleton height={32} width={cell.column.getSize()}>
            <rect height="32" rx="4" ry="4" width="100%" x="0" y="0" />
          </Skeleton>
        </div>
      )}
      {!table.options.isLoading && flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}

DataTableCell.displayName = 'DataTableCell';
