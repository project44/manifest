import { makeStyles, pxToRem } from '@project44-manifest/react-styles';
import { ButtonProps } from './Button.types';

export const useStyles = makeStyles<ButtonProps>((_, { isDisabled, size, variant }) => ({
	root: {
		alignItems: 'center',
		appearance: 'none',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '$small',
		boxShadow: '$small',
		boxSizing: 'border-box',
		color: '$text-primary',
		cursor: 'pointer',
		display: 'inline-flex',
		fontFamily: '$text',
		fontSize: '$small',
		fontWeight: '$semibold',
		justifyContent: 'center',
		letterSpacing: '$medium',
		lineHeight: '$small',
		outline: 'none',
		position: 'relative',
		px: pxToRem(12),
		userSelect: 'none',
		whiteSpace: 'nowrap',

		'&[data-focus-visible]': {
			outline: '$colors$palette-indigo-200 solid 2px',
		},

		...(isDisabled && {
			cursor: 'default',
			pointerEvents: 'none',
			opacity: 0.57,
		}),

		...(variant === 'brand' && {
			background: '$brand-gradient',
			color: '$palette-white',

			'&:hover': {
				background: '$brand-hover',
			},

			'&[data-pressed]': {
				background: '$brand-active',
			},
		}),

		...(variant === 'danger' && {
			backgroundColor: '$palette-red-500',
			color: '$palette-white',

			'&:hover': {
				background:
					'linear-gradient(0deg, rgba(9, 21, 33, 0.15), rgba(9, 21, 33, 0.15)), $colors$palette-red-500',
			},

			'&[data-pressed]': {
				background:
					'linear-gradient(0deg, rgba(9, 21, 33, 0.3), rgba(9, 21, 33, 0.3)), $colors$palette-red-500',
				boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
			},
		}),
		...(variant === 'primary' && {
			backgroundColor: '$primary-default',
			color: '$palette-white',

			'&:hover': {
				backgroundColor: '$primary-hover',
			},

			'&[data-pressed]': {
				backgroundColor: '$primary-active',
				boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
			},
		}),
		...(variant === 'secondary' && {
			backgroundColor: '$palette-white',

			'&:hover': {
				backgroundColor: '$palette-grey-100',
			},

			'&[data-pressed]': {
				backgroundColor: '$palette-grey-300',
				boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
			},
		}),
		...(variant === 'tertiary' && {
			backgroundColor: 'transparent',
			boxShadow: 'none',

			'&:hover': {
				backgroundColor: '$palette-grey-100',
			},

			'&[data-pressed]': {
				backgroundColor: '$palette-grey-300',
			},
		}),

		...(size === 'medium' && { py: pxToRem(10) }),
		...(size === 'small' && { py: pxToRem(6) }),
	},
	endIcon: {},
	startIcon: {},
}));
