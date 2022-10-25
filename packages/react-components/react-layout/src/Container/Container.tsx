import * as React from 'react';
import camelCase from 'lodash.camelcase';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { useStyles } from './Container.styles';
import { ContainerElement, ContainerProps } from './Container.types';

export const Container = React.forwardRef((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		className: classNameProp,
		classes: classesProp,
		css,
		fixed,
		maxWidth = 'large',
		...other
	} = props;

	const { classes, cx } = useStyles(
		{ fixed, maxWidth },
		{
			css,
			name: 'container',
			classes: classesProp,
			slots: {
				root: [fixed && 'fixed', maxWidth && `${camelCase(`max-width-${maxWidth}`)}`],
			},
		},
	);

	return <Comp {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)} />;
}) as ForwardRefComponent<ContainerElement, ContainerProps>;
