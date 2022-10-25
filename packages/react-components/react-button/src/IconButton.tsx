import * as React from 'react';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { Button } from './Button';
import { useStyles } from './IconButton.styles';
import { IconButtonElement, IconButtonProps } from './IconButton.types';

export const IconButton = React.forwardRef((props, forwardedRef) => {
	const { className: classNameProp, css, size = 'medium', ...other } = props;

	const { classes, cx } = useStyles({ css, size }, { css, name: 'icon-button' });

	return (
		<Button {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)} size={size} />
	);
}) as ForwardRefComponent<IconButtonElement, IconButtonProps>;
