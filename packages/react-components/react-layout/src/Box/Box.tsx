import * as React from 'react';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { useStyles } from './Box.styles';
import { BoxElement, BoxProps } from './Box.types';

export const Box = React.forwardRef((props, forwardedRef) => {
	const { as: Comp = 'div', className: classNameProp, classes: classesProp, css, ...other } = props;

	const { classes, cx } = useStyles(props, {
		css,
		name: 'box',
		classes: classesProp,
		slots: { root: [] },
	});

	return <Comp {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)} />;
}) as ForwardRefComponent<BoxElement, BoxProps>;
