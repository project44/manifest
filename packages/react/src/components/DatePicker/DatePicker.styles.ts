import { css, pxToRem } from '../../styles';

export const useStyles = css({
	$$backgroundColor: '$colors$background-primary',
	$$borderColor: '$colors$palette-grey-500',
	$$iconColor: '$colors$text-tertiary',
	$$textColor: '$colors$text-tertiary',

	'.manifest-datepicker__wrapper': {
		display: 'flex',
		minWidth: pxToRem(48),
		position: 'relative',
		width: '100%',
	},

	'.manifest-datepicker__icon': {
		alignItems: 'center',
		color: '$$iconColor',
		display: 'inline-flex',
		justifyContent: 'center',
		padding: '$small',
		pointerEvents: 'none',
		position: 'absolute',
		top: 0,
		zIndex: 2,
	},

	'.manifest-datepicker__icon--end': {
		right: 0,
	},

	'.manifest-datepicker__icon--start': {
		left: 0,
	},

	'.manifest-datepicker__input': {
		appearance: 'none',
		backgroundColor: '$$backgroundColor',
		border: '1px solid $$borderColor',
		borderRadius: '$small',
		boxSizing: 'border-box',
		color: '$$textColor',
		cursor: 'default',
		margin: 0,
		outline: 0,
		padding: '0 $small',
		paddingRight: pxToRem(40),
		textAlign: 'start',
		width: '100%',
	},

	'.manifest-datepicker__text': {
		color: '$text-tertiary',
	},

	variants: {
		hasStartIcon: {
			true: {
				'.manifest-datepicker__input': {
					paddingLeft: pxToRem(40),
				},
			},
		},
		isActive: {
			true: {
				$$borderColor: '$colors$primary-active',
				$$iconColor: '$colors$text-secondary',
				$$textColor: '$colors$text-primary',
			},
		},
		isDisabled: {
			true: {
				$$backgroundColor: '$colors$palette-grey-50',
				$$textColor: '$colors$text-disabled',

				'.manifest-datepicker__input': {
					cursor: 'not-allowed',
				},
			},
		},
		isFocused: {
			true: {
				$$borderColor: '$colors$primary-active',
				$$iconColor: '$colors$text-secondary',
				$$textColor: '$colors$text-primary',
			},
		},
		isFocusVisible: {
			true: {
				'.manifest-datepicker__input': {
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
		isInvalid: {
			true: {
				$$borderColor: '$colors$border-danger',
				$$iconColor: '$colors$text-danger',
				$$textColor: '$colors$text-danger',
			},
		},
		isPlaceholder: {
			true: {
				$$textColor: '$colors$text-tertiary',
			},
		},
		size: {
			medium: {
				'.manifest-datepicker__icon': {
					fontSize: '$x-large',
					size: pxToRem(40),

					'> .material-icons': {
						fontSize: '$x-large',
					},
				},

				'.manifest-datepicker__input': {
					height: pxToRem(40),
				},
			},
			small: {
				'.manifest-datepicker__icon': {
					fontSize: pxToRem(18),
					size: pxToRem(34),

					'> .material-icons': {
						fontSize: pxToRem(18),
					},
				},

				'.manifest-datepicker__input': {
					height: pxToRem(34),
				},
			},
		},
	},

	defaultVariants: {
		size: 'medium',
	},
});
