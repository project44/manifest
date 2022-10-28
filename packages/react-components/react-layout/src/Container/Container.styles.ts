import { styled } from '@project44-manifest/react-styles';

export const StyledContainer = styled('div', {
	boxSizing: 'border-box',
	display: 'block',
	mx: 'auto',
	px: '$large',
	width: '100%',

	variants: {
		fixed: {
			true: {
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
			},
		},
		maxWidth: {
			small: {
				maxWidth: '$small',
			},
			medium: {
				maxWidth: '$medium',
			},
			large: {
				maxWidth: '$large',
			},
			'x-large': {
				maxWidth: '$x-large',
			},
			'x-small': {
				maxWidth: '$x-small',
			},
		},
	},
});
