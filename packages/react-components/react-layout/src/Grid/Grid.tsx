import * as React from 'react';
import camelCase from 'lodash.camelcase';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { useStyles } from './Grid.styles';
import { GridElement, GridProps } from './Grid.types';

export const Grid = React.forwardRef((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		className: classNameProp,
		classes: classesProp,
		columnGap,
		columns = 'auto',
		css,
		flow,
		gap,
		rowGap,
		rows = 'auto',
		...other
	} = props;

	const { classes, cx } = useStyles(
		{ columnGap, columns, flow, gap, rowGap, rows },
		{
			css,
			name: 'grid',
			classes: classesProp,
			slots: {
				root: [
					columnGap && `${camelCase(`column-gap-${columnGap}`)}`,
					gap && `${camelCase(`gap-${gap}`)}`,
					rowGap && `${camelCase(`row-gap-${rowGap}`)}`,
				],
			},
		},
	);

	return <Comp {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)} />;
}) as ForwardRefComponent<GridElement, GridProps>;
