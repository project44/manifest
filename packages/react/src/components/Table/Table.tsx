import * as React from 'react';
import { TableContext, TableContextOptions } from './Table.context';
import { cx } from '../../styles';
import { StyledTable } from './Table.styles';

type TableElement = React.ElementRef<typeof StyledTable>;
type TableNativeProps = React.ComponentPropsWithoutRef<typeof StyledTable>;

export interface TableProps
  extends Omit<TableNativeProps, 'onMouseEnter' | 'onMouseLeave'>,
    TableContextOptions {}

export const Table = React.forwardRef<TableElement, TableProps>((props, forwardedRef) => {
  const { className, showHover = false, onMouseEnter, onMouseLeave, ...other } = props;

  return (
    <TableContext.Provider value={{ onMouseEnter, onMouseLeave, showHover }}>
      <StyledTable {...other} className={cx('manifest-table', className)} ref={forwardedRef} />
    </TableContext.Provider>
  );
});
