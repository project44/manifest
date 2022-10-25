import * as React from 'react';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { ButtonGroupProvider } from './ButtonGroup.context';
import { useStyles } from './ButtonGroup.styles';
import { ButtonGroupElement, ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroup = React.forwardRef((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		children,
		className: classNameProp,
		classes: classesProp,
		css,
		isDisabled,
		isAttached,
		size,
		variant,
		...other
	} = props;

	const context = React.useMemo(() => ({ isDisabled, size, variant }), [isDisabled, size, variant]);

	const { classes, cx } = useStyles(
		{ isAttached },
		{
			css,
			name: 'button-group',
			classes: classesProp,
			slots: { root: [size, variant, isAttached && 'attached', isDisabled && 'disabled'] },
		},
	);

	return (
		<Comp {...other} ref={forwardedRef} className={cx(classes.root, classNameProp)}>
			<ButtonGroupProvider value={context}>{children}</ButtonGroupProvider>
		</Comp>
	);
}) as ForwardRefComponent<ButtonGroupElement, ButtonGroupProps>;
