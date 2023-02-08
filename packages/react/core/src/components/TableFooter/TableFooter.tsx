import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';

export type TableFooterElement = 'tfoot';
export type TableFooterOptions<T extends As = TableFooterElement> = Options<T> & StyleProps;
export type TableFooterProps<T extends As = TableFooterElement> = Props<TableFooterOptions<T>>;

export const TableFooter = createComponent<TableFooterOptions>(
  ({ className, ...other }, forwardedRef) => (
    <tfoot {...other} ref={forwardedRef} className={cx(className, 'manifest-table-footer')} />
  ),
);
