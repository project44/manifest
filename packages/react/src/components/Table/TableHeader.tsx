import * as React from 'react';
import { cx } from '../../styles';
import { StyledTableHeader } from './Table.styles';

type TableHeaderElement = React.ElementRef<typeof StyledTableHeader>;
type TableHeaderNativeProps = React.ComponentPropsWithoutRef<typeof StyledTableHeader>;

export type TableHeaderProps = TableHeaderNativeProps;

export const TableHeader = React.forwardRef<TableHeaderElement, TableHeaderProps>(
  ({ className, ...other }, forwardedRef) => (
    <StyledTableHeader
      {...other}
      className={cx('manifestui-table--header', className)}
      ref={forwardedRef}
    />
  ),
);
