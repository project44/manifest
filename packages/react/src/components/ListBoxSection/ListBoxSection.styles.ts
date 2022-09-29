import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
	boxSizing: 'border-box',
	margin: 0,
	minWidth: 0,

	'.manifest-listbox-section__group': {
		margin: 0,
		padding: 0,
	},

	'.manifest-listbox-section__label': {
		color: '$text-tertiary',
		px: '$x-small',
	},
});
