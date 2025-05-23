import * as React from 'react';
import { ChevronDown, ChevronUp, Sort } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import {
  AccessorColumnDef,
  CellContext,
  DisplayColumnDef,
  flexRender,
  GroupColumnDef,
  RowData,
} from '@tanstack/react-table';
import { getColumnLayoutStyles } from '../../utils';
import { DataTableColumnProps } from './DataTableColumn.types';

export interface ExtendedColumnDef<TData extends RowData, TValue = unknown>
  extends Omit<DisplayColumnDef<TData, TValue>, 'isGroupStart' | 'validate'>,
    Omit<GroupColumnDef<TData, TValue>, 'isGroupStart' | 'validate'>,
    Omit<AccessorColumnDef<TData, TValue>, 'isGroupStart' | 'validate'> {
  isGroupStart?: boolean;
  validate?: (row: CellContext<TData, TValue>) => { hasError: boolean; isDuplicate: boolean };
}

export function DataTableColumn<TData extends RowData, TVaue>(
  props: DataTableColumnProps<TData, TVaue>,
) {
  const { header, table } = props;
  const { column } = header;

  const isSortable = column.getCanSort();

  const styles: React.CSSProperties = getColumnLayoutStyles(table, column);

  const headerComponent = isSortable ? (
    <button className="manifest-table__heading">
      {flexRender(header.column.columnDef.header, header.getContext())}
      {isSortable && !header.column.getIsSorted() && <Sort size="small" />}
      {
        {
          asc: <ChevronDown size="small" />,
          desc: <ChevronUp size="small" />,
        }[header.column.getIsSorted() as string]
      }
    </button>
  ) : (
    flexRender(header.column.columnDef.header, header.getContext())
  );

  return (
    <th
      key={header.id}
      className={cx('manifest-table__cell', 'manifest-table__cell--header', {
        'manifest-table__cell--sticky-header': table.options.enableStickyHeader,
        'manifest-table__cell--pinned': column.getIsPinned(),
        isGroupStart: (column.columnDef as ExtendedColumnDef<TData>)?.isGroupStart,
      })}
      colSpan={header.colSpan}
      style={{ ...styles }}
      onClick={header.column.getToggleSortingHandler()}
    >
      {header.isPlaceholder ? null : headerComponent}
    </th>
  );
}

DataTableColumn.displayName = 'DataTableColumn';
