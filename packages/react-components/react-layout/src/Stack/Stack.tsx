import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledStack } from './Stack.styles';
import { StackElement, StackProps } from './Stack.types';

export const Stack = React.forwardRef((props, forwardedRef) => {
	const { as, className: classNameProp, css, gap, orientation, ...other } = props;

	return (
		<StyledStack
			{...other}
			ref={forwardedRef}
			as={as}
			className={cx('manifest-stack', classNameProp)}
			css={css}
			gap={gap}
			orientation={orientation}
		/>
	);
}) as ForwardRefComponent<StackElement, StackProps>;
