import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';

export type TableBodyElement = 'tbody';
export type TableBodyOptions<T extends As = TableBodyElement> = Options<T> & StyleProps;
export type TableBodyProps<T extends As = TableBodyElement> = Props<TableBodyOptions<T>>;

export const TableBody = createComponent<TableBodyOptions>(
	({ as: Comp = 'tbody', className, ...other }, forwardedRef) => (
		<Comp {...other} className={cx(className, 'manifest-table-body')} ref={forwardedRef} />
	),
);
