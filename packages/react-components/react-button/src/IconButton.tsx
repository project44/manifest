import * as React from 'react';
import { cx, pxToRem } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { Button } from './Button';
import { IconButtonElement, IconButtonProps } from './IconButton.types';

export const IconButton = React.forwardRef((props, forwardedRef) => {
	const { className: classNameProp, css, size = 'medium', ...other } = props;

	return (
		<Button
			{...other}
			ref={forwardedRef}
			className={cx('manifest-icon-button', classNameProp)}
			css={{
				...css,
				justifyContent: 'center',
				px: size === 'small' ? pxToRem(7) : '$small',
			}}
			size={size}
		/>
	);
}) as ForwardRefComponent<IconButtonElement, IconButtonProps>;
