import { makeStyles } from '@project44-manifest/react-styles';
import { GridItemProps } from './GridItem.types';

export const useStyles = makeStyles<GridItemProps>(
	(_, { area, column, columnEnd, columnStart, order, row, rowEnd, rowStart }) => ({
		root: {
			boxSizing: 'border-box',
			gridArea: area,
			gridColumn: typeof column === 'number' ? `span ${column} / span ${column}` : column,
			gridColumnEnd: columnEnd,
			gridColumnStart: columnStart,
			gridRow: typeof row === 'number' ? `span ${row} / span ${row}` : row,
			gridRowEnd: rowEnd,
			gridRowStart: rowStart,
			order,
		},
	}),
);
