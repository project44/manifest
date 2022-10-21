import { pxToRem, styled } from '@project44-manifest/react-styles';

export const ButtonIcon = styled('span', {
	display: 'inherit',

	variants: {
		placement: {
			end: {
				marginLeft: '$small',
				marginRight: '-$x-small',
			},
			start: {
				marginLeft: '-$x-small',
				marginRight: '$small',
			},
		},
		size: {
			medium: {
				fontSize: '$x-large',
			},
			small: {
				fontSize: pxToRem(18),
			},
		},
	},
});
