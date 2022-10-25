import { CSS } from '@project44-manifest/react-styles';

export interface FlexClasses {
	root: string;
	alignBaseline: string;
	alignCenter: string;
	alignEnd: string;
	alignStart: string;
	gapLarge: string;
	gapMedium: string;
	gapSmall: string;
	gapXLarge: string;
	gapXSmall: string;
	justifyAround: string;
	justifyBetween: string;
	justifyCenter: string;
	justifyStart: string;
	horizontal: string;
	vertical: string;
	wrap: string;
}

export type FlexElement = 'div';

export interface FlexProps {
	/**
	 * The alignment of the container's children.
	 */
	align?: 'baseline' | 'center' | 'end' | 'start';
	/** Override classes for the component */
	classes?: Partial<FlexClasses>;
	/** Theme aware style object */
	css?: CSS;
	/**
	 * The gap between rows and columns.
	 */
	gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
	/**
	 * The justification of the container's children.
	 */
	justify?: 'around' | 'between' | 'center' | 'end' | 'start';
	/**
	 * The orientation of the container's children.
	 */
	orientation?: 'horizontal' | 'vertical';
	/**
	 * Whether the container's should wrap when overflown.
	 */
	wrap?: boolean;
}
