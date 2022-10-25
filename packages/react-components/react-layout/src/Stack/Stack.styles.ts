import { makeStyles } from '@project44-manifest/react-styles';
import { StackProps } from './Stack.types';

export const useStyles = makeStyles<StackProps>((_, { gap, orientation }) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',

		...(gap === 'large' && { gap: '$large' }),
		...(gap === 'medium' && { gap: '$medium' }),
		...(gap === 'small' && { gap: '$small' }),
		...(gap === 'x-large' && { gap: '$x-large' }),
		...(gap === 'x-small' && { gap: '$x-small' }),

		...(orientation === 'horizontal' && { flexDirection: 'row' }),
		...(orientation === 'vertical' && { flexDirection: 'column' }),
	},
}));
