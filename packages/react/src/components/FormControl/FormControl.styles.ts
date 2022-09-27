import { css } from '../../styles';

export const useStyles = css({
	$$helperTextColor: '$colors$text-secondary',

	border: 0,
	display: 'inline-flex',
	margin: 0,
	padding: 0,
	position: 'relative',
	width: '100%',

	'.manifest-form-control__helper-text': {
		color: '$$helperTextColor',
		marginTop: '$x-small',
	},

	'.manifest-form-control__label': {
		color: '$text-secondary',
		padding: 0,
		marginBottom: '$x-small',
		position: 'relative',
	},

	'.manifest-form-control__required-indicator': {
		color: '$text-tertiary',
		marginLeft: '$x-small',
	},

	variants: {
		isInvalid: {
			true: {
				$$helperTextColor: '$colors$text-danger',
			},
		},
		orientation: {
			horizontal: {
				flexDirection: 'row',
			},
			vertical: {
				flexDirection: 'column',
			},
		},
	},

	defaultVariants: {
		orientation: 'horizontal',
	},
});
