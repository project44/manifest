import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { flexRender, RowData } from '@tanstack/react-table';
import { getColumnLayoutStyles } from '../../utils';
import { DataTableFooterColumnProps } from './DataTableFooterColumnProps.types';

export function DataTableFooterColumn<TData extends RowData, TVaue>(
  props: DataTableFooterColumnProps<TData, TVaue>,
) {
  const { header, table, totalObj, getTotalValue, index } = props;
  const { column } = header;
  const { totalsData, totalsKeyword } = totalObj;

  const styles: React.CSSProperties = getColumnLayoutStyles(table, column);

  return (
    <th
      key={header.id}
      className={cx('manifest-table__cell', 'manifest-table__cell--header', {
        'manifest-table__cell--sticky-header': table.options.enableStickyHeader,
        'manifest-table__cell--pinned': '',
      })}
      colSpan={header.colSpan}
      style={{ ...styles }}
    >
      {!Object.prototype.hasOwnProperty.call(totalsData, header.id) || index === 0
        ? totalsKeyword
        : flexRender(getTotalValue?.(totalsData[header.id]), header.getContext())}
    </th>
  );
}
