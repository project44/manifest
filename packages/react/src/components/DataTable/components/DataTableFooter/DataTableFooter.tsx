import { cx } from '@project44-manifest/react-styles';
import {     
RowData ,
  } from '@tanstack/react-table';
import { DataTableFooterColumn } from '../DataTableFooterColumn/DataTableFooterColumn';
import { DataTableFooterProps } from './DataTableFooter.types';

export function DataTableFooter<TData extends RowData>(props: DataTableFooterProps<TData>) {
  const { table, totalObj, getTotalValue } = props;


  return (
        <tfoot className={cx('manifest-table__header', {
            'manifest-table__header--sticky': !!table.options.enableStickyHeader,
          })}>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header,i) => (
                <DataTableFooterColumn key={header.id} getTotalValue={getTotalValue} header={header} index ={i} table={table} totalObj={totalObj }/>
              ))}
            </tr>
          ))}
        </tfoot>
  );
}
