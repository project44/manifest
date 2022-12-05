import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';

export type TableBodyElement = 'tbody';
export type TableBodyOptions<T extends As = TableBodyElement> = Options<T> & StyleProps;
export type TableBodyProps<T extends As = TableBodyElement> = Props<TableBodyOptions<T>>;

export const TableBody = createComponent<TableBodyOptions>(
  ({ as: Comp = 'tbody', className, ...other }, forwardedRef) => (
    <Comp {...other} ref={forwardedRef} className={cx(className, 'manifest-table-body')} />
  ),
);
