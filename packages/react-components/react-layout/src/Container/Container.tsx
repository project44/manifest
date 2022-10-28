import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledContainer } from './Container.styles';
import { ContainerElement, ContainerProps } from './Container.types';

export const Container = React.forwardRef((props, forwardedRef) => {
	const { as, className: classNameProp, css, fixed, maxWidth = 'large', ...other } = props;

	return (
		<StyledContainer
			{...other}
			ref={forwardedRef}
			as={as}
			className={cx('manifest-container', classNameProp)}
			css={css}
			fixed={fixed}
			maxWidth={maxWidth}
		/>
	);
}) as ForwardRefComponent<ContainerElement, ContainerProps>;
