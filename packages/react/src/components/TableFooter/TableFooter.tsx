import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '@project44-manifest/react-styles';

export type TableFooterElement = 'tfoot';
export type TableFooterOptions<T extends As = TableFooterElement> = Options<T> & StyleProps;
export type TableFooterProps<T extends As = TableFooterElement> = Props<TableFooterOptions<T>>;

export const TableFooter = createComponent<TableFooterOptions>(
	({ className, ...other }, forwardedRef) => (
		<tfoot {...other} className={cx(className, 'manifest-table-footer')} ref={forwardedRef} />
	),
);
