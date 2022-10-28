import { CSS } from '@project44-manifest/react-styles';

export type StackElement = 'div';

export interface StackProps {
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
