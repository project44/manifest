import { css, pxToRem } from '../../styles';

export const useStyles = css({
	alignItems: 'center',
	appearance: 'none',
	background: 'none',
	border: '1px solid $colors$palette-grey-200',
	borderRadius: '$small',
	boxSizing: 'border-box',
	color: '$text-primary',
	display: 'inline-flex',
	height: pxToRem(24),
	justifyContent: 'center',
	outline: 0,
	px: '$small',
	py: pxToRem(3),
	textDecoration: 'none',
	verticalAlign: 'middle',
	whiteSpace: 'nowrap',

	'.manifest-tag__icon': {
		fontSize: '$medium',
		margin: 0,
		marginLeft: '$x-small',
		padding: 0,
		size: pxToRem(16),
	},

	'.manifest-tag__text': {
		color: 'inherit',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},

	variants: {
		isRemovable: {
			true: {
				paddingRight: pxToRem(6),
			},
		},
	},
});
