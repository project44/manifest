import { makeStyles } from '@project44-manifest/react-styles';
import { GridProps } from './Grid.types';

export const useStyles = makeStyles<GridProps>(
	(_, { columnGap, columns = 'auto', flow, gap, rowGap, rows = 'auto' }) => ({
		root: {
			boxSizing: 'border-box',
			display: 'grid',

			...(columns && { gridTemplateColumns: columns }),
			...(flow && { gridAutoFlow: flow }),
			...(rows && { gridTemplateRows: rows }),

			...(columnGap === 'large' && { columnGap: '$large' }),
			...(columnGap === 'medium' && { columnGap: '$medium' }),
			...(columnGap === 'small' && { columnGap: '$small' }),
			...(columnGap === 'x-large' && { columnGap: '$x-large' }),
			...(columnGap === 'x-small' && { columnGap: '$x-small' }),

			...(gap === 'large' && { gap: '$large' }),
			...(gap === 'medium' && { gap: '$medium' }),
			...(gap === 'small' && { gap: '$small' }),
			...(gap === 'x-large' && { gap: '$x-large' }),
			...(gap === 'x-small' && { gap: '$x-small' }),

			...(rowGap === 'large' && { rowGap: '$large' }),
			...(rowGap === 'medium' && { rowGap: '$medium' }),
			...(rowGap === 'small' && { rowGap: '$small' }),
			...(rowGap === 'x-large' && { rowGap: '$x-large' }),
			...(rowGap === 'x-small' && { rowGap: '$x-small' }),
		},
	}),
);
