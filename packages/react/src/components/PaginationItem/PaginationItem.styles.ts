import { css, focus, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css(
	{
		$$backgroundColor: '$colors$palette-grey-50',

		alignItems: 'center',
		appearance: 'none',
		backgroundColor: '$$backgroundColor',
		border: '1px solid $colors$palette-grey-200',
		borderRadius: '$small',
		boxSizing: 'border-box',
		color: '$text-secondary',
		cursor: 'pointer',
		display: 'inline-flex',
		margin: 0,
		outline: 0,
		position: 'relative',
		px: pxToRem(12),
		py: pxToRem(6),
		transition: '$color',
		textDecoration: 'none',
		userSelect: 'none',
		width: 'auto',

		'.manifest-icon': {
			fontSize: pxToRem(18),
		},

		'.manifest-pagination-item__icon--end': {
			marginLeft: '$x-small',
		},

		'.manifest-pagination-item__icon--start': {
			marginRight: '$x-small',
		},

		variants: {
			isActive: {
				true: {
					$$backgroundColor: '$colors$palette-grey-200',
				},
			},
			isDisabled: {
				true: {
					opacity: 0.37,
					pointerEvents: 'none',
				},
			},
			isHovered: {
				true: {
					$$backgroundColor: '$colors$palette-grey-100',
				},
			},
			isPressed: {
				true: {},
			},
		},

		compoundVariants: [
			{
				isActive: true,
				isHovered: true,
				css: {
					$$backgroundColor: '$colors$palette-grey-200',
				},
			},
		],
	},
	focus,
);
