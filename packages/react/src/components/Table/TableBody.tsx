import * as React from 'react';
import { cx } from '../../styles';
import { StyledTableBody } from './Table.styles';

type TableBodyElement = React.ElementRef<typeof StyledTableBody>;
type TableBodyNativeProps = React.ComponentPropsWithoutRef<typeof StyledTableBody>;

export type TableBodyProps = TableBodyNativeProps;

export const TableBody = React.forwardRef<TableBodyElement, TableBodyProps>(
  ({ className, ...other }, forwardedRef) => (
    <StyledTableBody
      {...other}
      className={cx('manifestui-table--body', className)}
      ref={forwardedRef}
    />
  ),
);
