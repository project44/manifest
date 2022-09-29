import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
	justifyContent: 'center',

	variants: {
		size: {
			medium: {
				px: '$small',
			},
			small: {
				px: pxToRem(7),
			},
		},
	},
});
