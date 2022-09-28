import { css, pxToRem } from '../../styles';

export const useStyles = css({
	$$backgroundColor: '$colors$background-primary',
	$$borderColor: '$colors$palette-grey-500',
	$$iconColor: '$colors$text-tertiary',
	$$textColor: '$colors$text-primary',

	'.manifest-textfield-base__wrapper': {
		alignItems: 'center',
		boxSizing: 'border-box',
		display: 'inline-flex',
		justifyContent: 'flex-start',
		position: 'relative',
		width: 'auto',
	},

	'.manifest-textfield-base__icon': {
		alignItems: 'center',
		color: '$$iconColor',
		display: 'inline-flex',
		fontSize: '$x-large',
		justifyContent: 'center',
		padding: '$small',
		pointerEvents: 'none',
		position: 'absolute',
		top: 0,
		zIndex: 2,

		'> .material-icons': {
			fontSize: '$x-large',
		},
	},

	'.manifest-textfield-base__icon--end': {
		right: 0,
	},

	'.manifest-textfield-base__icon--start': {
		left: 0,
	},

	'.manifest-textfield-base__input': {
		appearance: 'none',
		backgroundColor: '$$backgroundColor',
		border: '1px solid $$borderColor',
		borderRadius: '$small',
		boxSizing: 'border-box',
		color: '$$textColor',
		cursor: 'text',
		margin: 0,
		outline: 0,
		padding: '$small',
		resize: 'none',
		transition: '$color',
		typography: '$subtext',
		width: '100%',

		'&::placeholder': {
			color: '$text-tertiary',
		},
	},

	variants: {
		hasEndIcon: {
			true: {
				'.manifest-textfield-base__input': {
					paddingRight: pxToRem(40),
				},
			},
		},
		hasStartIcon: {
			true: {
				'.manifest-textfield-base__input': {
					paddingLeft: pxToRem(40),
				},
			},
		},
		isDisabled: {
			true: {
				$$backgroundColor: '$colors$palette-grey-50',
				$$textColor: '$colors$text-disabled',

				cursor: 'not-allowed',
			},
		},
		isFocused: {
			true: {
				$$borderColor: '$colors$primary-default',
			},
		},
		isFocusVisible: {
			true: {
				'.manifest-textfield-base__input': {
					boxShadow: '0 0 0 3px $colors$palette-indigo-200',
				},
			},
			false: {
				boxShadow: 'none',
			},
		},
		isHovered: {
			true: {
				$$borderColor: '$colors$palette-grey-600',
			},
		},
		isInvalid: {
			true: {
				$$borderColor: '$colors$border-danger',
				$$iconColor: '$colors$text-danger',
				$$textColor: '$colors$text-danger',
			},
		},
	},
});
