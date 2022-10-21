import { makeStyles } from '@project44-manifest/react-styles';
import { ButtonGroupProps } from './ButtonGroup.types';

export const useStyles = makeStyles<ButtonGroupProps>((_, { isAttached }) => ({
	root: {
		boxSizing: 'border-box',
		display: 'inline-flex',

		...(isAttached && {
			'> *:first-of-type:not(:last-of-type)': {
				borderBottomRightRadius: 0,
				borderTopRightRadius: 0,
			},

			'> *:not(:first-of-type):not(:last-of-type)': { borderRadius: 0 },

			'> *:not(:first-of-type):last-of-type': {
				borderBottomLeftRadius: 0,
				borderTopLeftRadius: 0,
			},
		}),

		...(!isAttached && {
			'& > *:not(style) ~ *:not(style)': { marginLeft: '$small' },
		}),
	},
}));
