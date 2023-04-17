import * as React from 'react';
import { ArrowDown, ArrowUp, Sort } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import { flexRender, RowData } from '@tanstack/react-table';
import { getColumnLayoutStyles } from '../../utils';
import { DataTableColumnProps } from './DataTableColumn.types';

export function DataTableColumn<TData extends RowData, TVaue>(
  props: DataTableColumnProps<TData, TVaue>,
) {
  const { header, table } = props;
  const { column } = header;

  const isSortable = column.getCanSort();

  const styles: React.CSSProperties = getColumnLayoutStyles(table, column);

  return (
    <th
      key={header.id}
      className={cx('manifest-table__cell', 'manifest-table__cell--header', {
        'manifest-table__cell--sticky-header': table.options.enableStickyHeader,
        'manifest-table__cell--pinned': column.getIsPinned(),
      })}
      colSpan={header.colSpan}
      style={{ ...styles }}
      onClick={header.column.getToggleSortingHandler()}
    >
      {isSortable ? (
        <button className="manifest-table__heading">
          {flexRender(header.column.columnDef.header, header.getContext())}
          {isSortable && !header.column.getIsSorted() && <Sort size="small" />}
          {
            {
              asc: <ArrowDown size="small" />,
              desc: <ArrowUp size="small" />,
            }[header.column.getIsSorted() as string]
          }
        </button>
      ) : (
        flexRender(header.column.columnDef.header, header.getContext())
      )}
    </th>
  );
}
