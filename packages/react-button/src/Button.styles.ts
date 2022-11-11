import { focus, pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledButton = styled(
	'button',
	{
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

		variants: {
			hasEndIcon: {
				true: {
					paddingRight: '$small',
				},
			},
			hasStartIcon: {
				true: {
					paddingLeft: '$small',
				},
			},
			isDisabled: {
				true: {
					cursor: 'not-allowed',
					pointerEvents: 'none',
					opacity: 0.57,
				},
			},
			isFocusVisible: {
				true: {},
			},
			isHovered: {
				true: {},
			},
			isPressed: {
				true: {},
			},
			variant: {
				danger: {
					backgroundColor: '$palette-red-500',
					color: '$palette-white',
				},
				brand: {
					background: '$brand-gradient',
					color: '$palette-white',
				},
				primary: {
					backgroundColor: '$primary-default',
					color: '$palette-white',
				},
				secondary: {
					backgroundColor: '$palette-white',
				},
				tertiary: {
					backgroundColor: 'transparent',
					boxShadow: 'none',
				},
			},
			size: {
				medium: {
					height: pxToRem(40),
					py: '$small',

					[`> .material-icons`]: {
						fontSize: '$x-large',
					},
				},
				small: {
					height: pxToRem(32),
					py: pxToRem(6),

					[`> .material-icons`]: {
						fontSize: pxToRem(18),
					},
				},
			},
		},

		compoundVariants: [
			{
				isHovered: true,
				variant: 'primary',
				css: {
					backgroundColor: '$primary-hover',
				},
			},
			{
				isHovered: true,
				variant: 'secondary',
				css: {
					backgroundColor: '$palette-grey-100',
				},
			},
			{
				isHovered: true,
				variant: 'tertiary',
				css: {
					backgroundColor: '$palette-grey-100',
				},
			},
			{
				isHovered: true,
				variant: 'brand',
				css: {
					background: '$brand-hover',
				},
			},
			{
				isHovered: true,
				variant: 'danger',
				css: {
					background:
						'linear-gradient(0deg, rgba(9, 21, 33, 0.15), rgba(9, 21, 33, 0.15)), $colors$palette-red-500',
				},
			},
			{
				isPressed: true,
				variant: 'primary',
				css: {
					backgroundColor: '$primary-active',
					boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
				},
			},
			{
				isPressed: true,
				variant: 'secondary',
				css: {
					backgroundColor: '$palette-grey-300',
					boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
				},
			},
			{
				isPressed: true,
				variant: 'tertiary',
				css: {
					backgroundColor: '$palette-grey-300',
				},
			},
			{
				isPressed: true,
				variant: 'brand',
				css: {
					background: '$brand-active',
				},
			},
			{
				isPressed: true,
				variant: 'danger',
				css: {
					background:
						'linear-gradient(0deg, rgba(9, 21, 33, 0.3), rgba(9, 21, 33, 0.3)), $colors$palette-red-500',
					boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
				},
			},
		],

		defaultVariants: {
			size: 'medium',
			variant: 'primary',
		},
	},
	focus,
);
