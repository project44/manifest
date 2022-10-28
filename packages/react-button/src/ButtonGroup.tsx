import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { ButtonGroupProvider } from './ButtonGroup.context';
import { StyledButtonGroup } from './ButtonGroup.styles';
import type { ButtonGroupElement, ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroup = React.forwardRef((props, forwardedRef) => {
	const {
		as,
		children,
		className: classNameProp,
		css,
		isDisabled,
		isAttached,
		size,
		variant,
		...other
	} = props;

	const context = React.useMemo(() => ({ isDisabled, size, variant }), [isDisabled, size, variant]);

	const className = cx(
		'manifest-button-group',
		{
			'manifest-button-group--attached': isAttached,
		},
		classNameProp,
	);

	return (
		<StyledButtonGroup
			{...other}
			ref={forwardedRef}
			as={as}
			className={className}
			css={css}
			isAttached={isAttached}
		>
			<ButtonGroupProvider value={context}>{children}</ButtonGroupProvider>
		</StyledButtonGroup>
	);
}) as ForwardRefComponent<ButtonGroupElement, ButtonGroupProps>;
