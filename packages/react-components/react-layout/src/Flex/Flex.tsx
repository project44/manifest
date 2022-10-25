import * as React from 'react';
import camelCase from 'lodash.camelcase';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { useStyles } from './Flex.styles';
import { FlexElement, FlexProps } from './Flex.types';

export const Flex = React.forwardRef((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		align,
		className: classNameProp,
		classes: classesProp,
		css,
		gap,
		justify,
		orientation,
		wrap,
		...other
	} = props;

	const { classes, cx } = useStyles(
		{ align, gap, justify, orientation, wrap },
		{
			css,
			name: 'flex',
			classes: classesProp,
			slots: {
				root: [
					align && `${camelCase(`align-${align}`)}`,
					justify && `${camelCase(`justify-${justify}`)}`,
					gap && `${camelCase(`gap-${gap}`)}`,
					orientation && orientation,
					wrap && 'wrap',
				],
			},
		},
	);

	return <Comp {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)} />;
}) as ForwardRefComponent<FlexElement, FlexProps>;
