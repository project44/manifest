import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledGridItem } from './GridItem.styles';
import type { GridItemElement, GridItemProps } from './GridItem.types';

export const GridItem = React.forwardRef((props, forwardedRef) => {
	const {
		area,
		as,
		className: classNameProp,
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

	return (
		<StyledGridItem
			{...other}
			ref={forwardedRef}
			as={as}
			className={cx('manifest-grid-item', classNameProp)}
			css={{
				...css,
				gridArea: area,
				gridColumn: typeof column === 'number' ? `span ${column} / span ${column}` : column,
				gridColumnEnd: columnEnd,
				gridColumnStart: columnStart,
				gridRow: typeof row === 'number' ? `span ${row} / span ${row}` : row,
				gridRowEnd: rowEnd,
				gridRowStart: rowStart,
				order,
			}}
		/>
	);
}) as ForwardRefComponent<GridItemElement, GridItemProps>;
