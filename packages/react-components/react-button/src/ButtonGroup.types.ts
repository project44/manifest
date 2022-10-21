import { CSS } from '@project44-manifest/react-styles';
import { ButtonSize, ButtonSizeClasses, ButtonVariant, ButtonVariantClasses } from './Button.types';

export type ButtonGroupElement = 'div';

export interface ButtonGroupClasses extends ButtonSizeClasses, ButtonVariantClasses {
	root: string;
	attached: string;
	disabled: string;
}

export interface ButtonGroupProps {
	/** Override classes for the component */
	classes?: Partial<ButtonGroupClasses>;
	/** Theme aware style object */
	css?: CSS;
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
