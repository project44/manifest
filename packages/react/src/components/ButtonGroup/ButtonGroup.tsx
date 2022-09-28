import type { ButtonSize, ButtonVariant } from '../Button';
import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { ButtonGroupContext } from './ButtonGroup.context';
import { cx } from '../../styles';
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

	const { className } = useStyles({ css, isAttached });

	const classes = cx(className, classNameProp, {
		['manifest-button-group']: true,
		[`manifest-button-group--attached`]: isAttached,
	});

	return (
		<Comp {...other} className={classes} ref={forwardedRef}>
			<ButtonGroupContext.Provider value={{ isDisabled, size, variant }}>
				{children}
			</ButtonGroupContext.Provider>
		</Comp>
	);
});
