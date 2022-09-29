import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { TableContext } from './Table.context';
import { cx } from '@project44-manifest/react-styles';
import { useStyles } from './Table.styles';

export type TableElement = 'table';
export type TableOptions<T extends As = TableElement> = Options<T> & StyleProps & TableContext;
export type TableProps<T extends As = TableElement> = Props<TableOptions<T>>;

export const Table = createComponent<TableOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'table',
		className: classNameProp,
		css,
		showHover = false,
		onMouseEnter,
		onMouseLeave,
		...other
	} = props;

	const { className } = useStyles({ css });

	return (
		<TableContext.Provider value={{ onMouseEnter, onMouseLeave, showHover }}>
			<Comp
				{...other}
				className={cx(className, classNameProp, 'manifest-table')}
				ref={forwardedRef}
			/>
		</TableContext.Provider>
	);
});
