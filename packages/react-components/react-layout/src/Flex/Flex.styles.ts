import { makeStyles } from '@project44-manifest/react-styles';
import { FlexProps } from './Flex.types';

export const useStyles = makeStyles<FlexProps>((_, { align, gap, justify, orientation, wrap }) => ({
	root: {
		display: 'flex',

		...(align === 'baseline' && { alignItems: 'baseline' }),
		...(align === 'center' && { alignItems: 'center' }),
		...(align === 'end' && { alignItems: 'flex-end' }),
		...(align === 'start' && { alignItems: 'flex-start' }),

		...(gap === 'large' && { gap: '$large' }),
		...(gap === 'medium' && { gap: '$medium' }),
		...(gap === 'small' && { gap: '$small' }),
		...(gap === 'x-large' && { gap: '$x-large' }),
		...(gap === 'x-small' && { gap: '$x-small' }),

		...(justify === 'around' && { justifyContent: 'space-around' }),
		...(justify === 'between' && { justifyContent: 'space-between' }),
		...(justify === 'center' && { justifyContent: 'center' }),
		...(justify === 'end' && { justifyContent: 'flex-end' }),
		...(justify === 'start' && { justifyContent: 'flex-start' }),

		...(orientation === 'horizontal' && { flexDirection: 'row' }),
		...(orientation === 'vertical' && { flexDirection: 'column' }),

		...(wrap && { flexWrap: 'wrap' }),
	},
}));
