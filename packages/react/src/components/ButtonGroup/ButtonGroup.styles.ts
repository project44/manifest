import { css } from '../../styles';

export const useStyles = css({
	boxSizing: 'border-box',
	display: 'inline-flex',

	variants: {
		isAttached: {
			true: {
				'> *:first-of-type:not(:last-of-type)': {
					borderBottomRightRadius: 0,
					borderTopRightRadius: 0,
				},

				'> *:not(:first-of-type):not(:last-of-type)': { borderRadius: 0 },

				'> *:not(:first-of-type):last-of-type': {
					borderBottomLeftRadius: 0,
					borderTopLeftRadius: 0,
				},
			},
			false: {
				'& > *:not(style) ~ *:not(style)': { marginLeft: '$small' },
			},
		},
	},

	defaultVariants: {
		isAttached: false,
	},
});
