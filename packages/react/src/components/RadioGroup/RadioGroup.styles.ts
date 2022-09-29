import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
	border: 0,
	display: 'flex',
	flexDirection: 'column',
	gap: '$small',
	margin: 0,
	padding: 0,

	variants: {
		orientation: {
			horizontal: {
				flexFlow: 'row wrap',
			},
			vertical: {
				flexFlow: 'column wrap',
			},
		},
	},

	defaultVariants: {
		orientation: 'vertical',
	},
});
