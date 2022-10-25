import { makeStyles } from '@project44-manifest/react-styles';
import { ContainerProps } from './Container.types';

export const useStyles = makeStyles<ContainerProps>((_, { fixed, maxWidth }) => ({
	root: {
		boxSizing: 'border-box',
		display: 'block',
		mx: 'auto',
		px: '$large',
		width: '100%',

		...(maxWidth === 'large' && { maxWidth: '$large' }),
		...(maxWidth === 'medium' && { maxWidth: '$medium' }),
		...(maxWidth === 'small' && { maxWidth: '$small' }),
		...(maxWidth === 'x-large' && { maxWidth: '$x-large' }),
		...(maxWidth === 'x-small' && { maxWidth: '$x-small' }),

		...(fixed && {
			'@sm': {
				maxWidth: '$small',
			},
			'@md': {
				maxWidth: '$medium',
			},
			'@lg': {
				maxWidth: '$large',
			},
			'@xl': {
				maxWidth: '$x-large',
			},
			'@xs': {
				maxWidth: '$x-small',
			},
		}),
	},
}));
