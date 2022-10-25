import * as React from 'react';
import camelCase from 'lodash.camelcase';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { useStyles } from './Stack.styles';
import { StackElement, StackProps } from './Stack.types';

export const Stack = React.forwardRef((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		className: classNameProp,
		classes: classesProp,
		css,
		gap,
		orientation,
		...other
	} = props;

	const { classes, cx } = useStyles(
		{ gap, orientation },
		{
			css,
			name: 'stack',
			classes: classesProp,
			slots: {
				root: [gap && `${camelCase(`gap-${gap}`)}`, orientation && orientation],
			},
		},
	);

	return <Comp {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)} />;
}) as ForwardRefComponent<StackElement, StackProps>;
