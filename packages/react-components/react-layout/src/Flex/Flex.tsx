import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledFlex } from './Flex.styles';
import { FlexElement, FlexProps } from './Flex.types';

export const Flex = React.forwardRef((props, forwardedRef) => {
	const {
		as,
		align,
		className: classNameProp,
		css,
		gap,
		justify,
		orientation,
		wrap,
		...other
	} = props;

	return (
		<StyledFlex
			{...other}
			ref={forwardedRef}
			align={align}
			as={as}
			className={cx('manifest-flex', classNameProp)}
			css={css}
			gap={gap}
			justify={justify}
			orientation={orientation}
			wrap={wrap}
		/>
	);
}) as ForwardRefComponent<FlexElement, FlexProps>;
