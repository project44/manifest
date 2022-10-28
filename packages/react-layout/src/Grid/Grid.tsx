import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledGrid } from './Grid.styles';
import type { GridElement, GridProps } from './Grid.types';

export const Grid = React.forwardRef((props, forwardedRef) => {
	const {
		as,
		className: classNameProp,
		columnGap,
		columns = 'auto',
		css,
		flow,
		gap,
		rowGap,
		rows = 'auto',
		...other
	} = props;

	return (
		<StyledGrid
			{...other}
			ref={forwardedRef}
			as={as}
			className={cx('manifest-grid', classNameProp)}
			columnGap={columnGap}
			css={{
				...css,
				gridAutoFlow: flow,
				gridTemplateColumns: columns,
				gridTemplateRows: rows,
			}}
			gap={gap}
			rowGap={rowGap}
		/>
	);
}) as ForwardRefComponent<GridElement, GridProps>;
