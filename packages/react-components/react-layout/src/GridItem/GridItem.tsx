import * as React from 'react';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { useStyles } from './GridItem.styles';
import { GridItemElement, GridItemProps } from './GridItem.types';

export const GridItem = React.forwardRef((props, forwardedRef) => {
	const {
		area,
		as: Comp = 'div',
		className: classNameProp,
		classes: classesProp,
		css,
		column,
		columnEnd,
		columnStart,
		order,
		row,
		rowEnd,
		rowStart,
		...other
	} = props;

	const { classes, cx } = useStyles(
		{ area, column, columnEnd, columnStart, order, row, rowEnd, rowStart },
		{
			css,
			name: 'grid-item',
			classes: classesProp,
			slots: {
				root: [],
			},
		},
	);

	return <Comp {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)} />;
}) as ForwardRefComponent<GridItemElement, GridItemProps>;
