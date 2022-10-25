import { CSS } from '@project44-manifest/react-styles';

export interface StackClasses {
	root: string;
	gapLarge: string;
	gapMedium: string;
	gapSmall: string;
	gapXLarge: string;
	gapXSmall: string;
	horizontal: string;
	vertical: string;
}

export type StackElement = 'div';

export interface StackProps {
	/** Override classes for the component */
	classes?: Partial<StackClasses>;
	/** Theme aware style object */
	css?: CSS;
	/**
	 * The gap between elements in the stack.
	 */
	gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
	/**
	 * The layout orientation  of the stack.
	 *
	 * @default 'vertical'
	 */
	orientation?: 'horizontal' | 'vertical';
}
