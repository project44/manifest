import type * as Stitches from '@stitches/react';

type Variant =
	| 'display'
	| 'heading'
	| 'title'
	| 'subtitle'
	| 'body'
	| 'body-bold'
	| 'subtext'
	| 'subtext-bold'
	| 'caption'
	| 'caption-bold';

export type VariantToken = `$${Variant}`;

type Variants = {
	[variant in VariantToken]: Stitches.CSSProperties;
};

const variants: Variants = {
	$display: {
		fontFamily: '$text',
		fontSize: '$xx-large',
		fontWeight: '$bold',
		letterSpacing: '$x-small',
		lineHeight: '$xx-large',
	},
	$heading: {
		fontFamily: '$text',
		fontSize: '$x-large',
		fontWeight: '$bold',
		letterSpacing: '$small',
		lineHeight: '$x-large',
	},
	$title: {
		fontFamily: '$text',
		fontSize: '$large',
		fontWeight: '$bold',
		letterSpacing: '$medium',
		lineHeight: '$large',
	},
	$subtitle: {
		fontFamily: '$text',
		fontSize: '$medium',
		fontWeight: '$bold',
		letterSpacing: '$medium',
		lineHeight: '$medium',
	},
	$body: {
		fontFamily: '$text',
		fontSize: '$medium',
		fontWeight: '$regular',
		letterSpacing: '$medium',
		lineHeight: '$medium',
	},
	'$body-bold': {
		fontFamily: '$text',
		fontSize: '$medium',
		fontWeight: '$semibold',
		letterSpacing: '$medium',
		lineHeight: '$medium',
	},
	$subtext: {
		fontFamily: '$text',
		fontSize: '$small',
		fontWeight: '$regular',
		letterSpacing: '$medium',
		lineHeight: '$small',
	},
	'$subtext-bold': {
		fontFamily: '$text',
		fontSize: '$small',
		fontWeight: '$semibold',
		letterSpacing: '$medium',
		lineHeight: '$small',
	},
	$caption: {
		fontFamily: '$text',
		fontSize: '$x-small',
		fontWeight: '$regular',
		letterSpacing: '$medium',
		lineHeight: '$x-small',
	},
	'$caption-bold': {
		fontFamily: '$text',
		fontSize: '$x-small',
		fontWeight: '$semibold',
		letterSpacing: '$medium',
		lineHeight: '$x-small',
	},
};

export const typography = {
	typography: (variant: VariantToken) => variants[variant],
};
