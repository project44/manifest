import * as React from 'react';
import { cx } from '../../styles';
import { StyledTableFooter } from './Table.styles';

type TableFooterElement = React.ElementRef<typeof StyledTableFooter>;
type TableFooterNativeProps = React.ComponentPropsWithoutRef<typeof StyledTableFooter>;

export type TableFooterProps = TableFooterNativeProps;

export const TableFooter = React.forwardRef<TableFooterElement, TableFooterProps>(
  ({ className, ...other }, forwardedRef) => (
    <StyledTableFooter
      {...other}
      className={cx('manifestui-table--footer', className)}
      ref={forwardedRef}
    />
  ),
);
