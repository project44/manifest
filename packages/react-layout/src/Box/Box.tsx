import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledBox } from './Box.styles';
import type { BoxElement, BoxProps } from './Box.types';

export const Box = React.forwardRef((props, forwardedRef) => {
	const { as, className: classNameProp, css, ...other } = props;

	return (
		<StyledBox
			{...other}
			ref={forwardedRef}
			as={as}
			className={cx('manifest-box', classNameProp)}
			css={css}
		/>
	);
}) as ForwardRefComponent<BoxElement, BoxProps>;
