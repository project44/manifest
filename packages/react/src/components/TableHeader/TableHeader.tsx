import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';

export type TableHeaderElement = 'thead';
export type TableHeaderOptions<T extends As = TableHeaderElement> = Options<T> & StyleProps;
export type TableHeaderProps<T extends As = TableHeaderElement> = Props<TableHeaderOptions<T>>;

export const TableHeader = createComponent<TableHeaderOptions>(
	({ as: Comp = 'thead', className, ...other }, forwardedRef) => (
		<Comp {...other} className={cx(className, 'manifest-table-header')} ref={forwardedRef} />
	),
);
