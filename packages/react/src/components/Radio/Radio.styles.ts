import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
	$$backgroundColor: '$colors$palette-white',
	$$borderColor: '$colors$palette-grey-500',

	alignItems: 'center',
	boxSizing: 'border-box',
	display: 'inline-flex',
	justifyContent: 'flex-start',
	position: 'relative',
	width: 'auto',

	'.manifest-radio__control': {
		alignItems: 'center',
		backgroundColor: '$$backgroundColor',
		border: '3px solid $$borderColor',
		borderRadius: '$full',
		boxSizing: 'border-box',
		color: '$palette-white',
		display: 'inline-flex',
		justifyContent: 'center',
		size: pxToRem(18),
	},

	'.manifest-radio__indicator': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		position: 'relative',

		'&::after': {
			backgroundColor: '$palette-white',
			borderRadius: '$full',
			content: '""',
			display: 'block',
			size: pxToRem(10),
		},
	},

	'.manifest-radio__input': {
		cursor: 'pointer',
		height: '100%',
		left: 0,
		margin: 0,
		opacity: 0,
		padding: 0,
		position: 'absolute',
		top: 0,
		width: '100%',
	},

	'.manifest-radio__text': {
		marginLeft: '$small',
	},

	variants: {
		isChecked: {
			true: {
				$$backgroundColor: '$colors$primary-default',
				$$borderColor: 'transparent',
			},
		},
		isDisabled: {
			true: {
				cursor: 'not-allowed',
				opacity: 0.58,
				pointerEvents: 'none',
			},
		},
		isFocusVisible: {
			true: {
				'.manifest-radio__control': {
					outline: '$colors$palette-indigo-200 solid 3px',
				},
			},
			false: {
				outline: 'none',
			},
		},
		isHovered: {
			true: {
				$$borderColor: '$colors$palette-grey-600',
			},
		},
	},

	compoundVariants: [
		{
			isChecked: true,
			isHovered: true,
			css: {
				$$borderColor: '$colors$primary-default',
			},
		},
	],
});
