import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { filterDOMProps } from '@project44-manifest/react-utils';
import { useStyles } from './Typography.styles';
import { TypographyElement, TypographyProps } from './Typography.types';

const variantMap = {
	body: 'p',
	bodyBold: 'p',
	caption: 'span',
	captionBold: 'span',
	display: 'h1',
	heading: 'h2',
	subtext: 'span',
	subtextBold: 'span',
	subtitle: 'h4',
	title: 'h3',
} as const;

export const Typography = React.forwardRef((props, forwardedRef) => {
	const {
		as,
		className: classNameProp,
		classes: classesProp,
		css,
		paragraph,
		variant = 'body',
		...other
	} = props;

	const Comp = as ?? (paragraph ? 'p' : variantMap[variant]);

	const { classes } = useStyles(props, {
		name: 'typography',
		classes: classesProp,
		slots: { root: [variant, paragraph && 'paragraph'] },
	});

	return (
		<Comp
			{...filterDOMProps({ ...other })}
			ref={forwardedRef}
			className={cx(classes.root, classNameProp)}
		/>
	);
}) as ForwardRefComponent<TypographyElement, TypographyProps>;
