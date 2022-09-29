import type * as Stitches from '@stitches/react';

export const space = {
	m: (value: Stitches.PropertyValue<'margin'>) => ({ margin: value }),
	mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
	ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
	mr: (value: Stitches.PropertyValue<'marginRight'>) => ({ marginRight: value }),
	mt: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginTop: value }),
	mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
		marginLeft: value,
		marginRight: value,
	}),
	my: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginBottom: value, marginTop: value }),
	p: (value: Stitches.PropertyValue<'padding'>) => ({ padding: value }),
	pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
	pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
	pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
	pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
	px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
		paddingLeft: value,
		paddingRight: value,
	}),
	py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
		paddingBottom: value,
		paddingTop: value,
	}),
};
