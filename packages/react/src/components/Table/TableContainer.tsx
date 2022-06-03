import * as React from 'react';
import { cx } from '../../styles';
import { StyledTableContainer } from './Table.styles';

type TableContainerElement = React.ElementRef<typeof StyledTableContainer>;
type TableContainerNativeProps = React.ComponentPropsWithoutRef<typeof StyledTableContainer>;

export type TableContainerProps = TableContainerNativeProps;

export const TableContainer = React.forwardRef<TableContainerElement, TableContainerProps>(
  ({ className, ...other }, forwardedRef) => (
    <StyledTableContainer
      {...other}
      className={cx('manifestui-table--container', className)}
      ref={forwardedRef}
    />
  ),
);
