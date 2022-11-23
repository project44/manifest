import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import type { ButtonSize, ButtonVariant } from '../Button';
import { ButtonGroupContext } from './ButtonGroup.context';
import { useStyles } from './ButtonGroup.styles';

export type ButtonGroupElement = 'div';
export interface ButtonGroupOptions<T extends As = ButtonGroupElement>
	extends Options<T>,
		StyleProps {
	/**
	 * Whether the buttons in the button group are all disabled.
	 *
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * Whether the buttons in the button are attached.
	 */
	isAttached?: boolean;
	/**
	 * The size of the buttons in the group.
	 *
	 * @default 'medium'
	 */
	size?: ButtonSize;
	/**
	 * The group variant
	 *
	 * @default 'primary'
	 */
	variant?: ButtonVariant;
}

export type ButtonGroupProps<T extends As = ButtonGroupElement> = Props<ButtonGroupOptions<T>>;

export const ButtonGroup = createComponent<ButtonGroupOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'div',
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

	const { className } = useStyles({ css, isAttached });

	const classes = cx(className, classNameProp, {
		'manifest-button-group': true,
		[`manifest-button-group--attached`]: isAttached,
	});

	return (
		<Comp {...other} ref={forwardedRef} className={classes}>
			<ButtonGroupContext.Provider value={context}>{children}</ButtonGroupContext.Provider>
		</Comp>
	);
});
