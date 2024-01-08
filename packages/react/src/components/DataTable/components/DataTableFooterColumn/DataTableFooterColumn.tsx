/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { flexRender, RowData } from '@tanstack/react-table';
import { getColumnLayoutStyles } from '../../utils';
import { DataTableFooterColumnProps } from './DataTableFooterColumnProps.types';
import { ExtendedColumnDef } from '../DataTableColumn';

export function DataTableFooterColumn<TData extends RowData, TVaue>(
  props: DataTableFooterColumnProps<TData, TVaue>,
) {
  const { header, table, footerProps, index } = props;
  const { column } = header;
  const { data, keyword, callBackFunc, enableSticky } = footerProps;

  const styles: React.CSSProperties = getColumnLayoutStyles(table, column);
  const sticky: React.CSSProperties = {
    position: 'sticky',
    bottom: '0px',
    zIndex: 0,
  };

  return (
    <th
      key={header.id}
      className={cx('manifest-table__cell', 'manifest-table__cell--header', {
        'manifest-table__cell--pinned': column.getIsPinned(),
        isGroupStart: (column.columnDef as ExtendedColumnDef<TData>)?.isGroupStart,
      })}
      colSpan={header.colSpan}
      style={{
        ...(enableSticky ? sticky : {}),
        ...styles,
      }}
    >
      {flexRender(callBackFunc?.(data, header.id, index, keyword), header.getContext())}
    </th>
  );
}

DataTableFooterColumn.displayName = 'DataTableFooterColumn';
