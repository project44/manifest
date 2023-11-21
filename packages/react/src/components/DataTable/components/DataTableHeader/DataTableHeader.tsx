import { cx } from '@project44-manifest/react-styles';
import { RowData } from '@tanstack/react-table';
import { DataTableColumn } from '../DataTableColumn';
import type { DataTableHeaderProps } from './DataTableHeader.types';

export function DataTableHeader<TData extends RowData>(props: DataTableHeaderProps<TData>) {
  const { table } = props;

  return (
    <thead
      className={cx('manifest-table__header', {
        'manifest-table__header--sticky': !!table.options.enableStickyHeader,
      })}
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="manifest-table__row">
          {headerGroup.headers.map((header) => (
            <DataTableColumn key={header.id} header={header} table={table} />
          ))}
        </tr>
      ))}
    </thead>
  );
}

DataTableHeader.displayName = 'DataTableHeader';
