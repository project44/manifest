import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';

export type TableHeaderElement = 'thead';
export type TableHeaderOptions<T extends As = TableHeaderElement> = Options<T> & StyleProps;
export type TableHeaderProps<T extends As = TableHeaderElement> = Props<TableHeaderOptions<T>>;

export const TableHeader = createComponent<TableHeaderOptions>(
	({ as: Comp = 'thead', className, ...other }, forwardedRef) => (
		<Comp {...other} ref={forwardedRef} className={cx(className, 'manifest-table-header')} />
	),
);
