import { CSS } from '@project44-manifest/react-styles';

export interface ContainerClasses {
	root: string;
	fixed: string;
	maxWidthLarge: string;
	maxWidthMedium: string;
	maxWidthSmall: string;
	maxWidthXLarge: string;
	maxWidthXSmall: string;
}

export type ContainerElement = 'div';

export interface ContainerProps {
	/** Override classes for the component */
	classes?: Partial<ContainerClasses>;
	/** Theme aware style object */
	css?: CSS;
	/**
	 * Whether the container should adjust its max-width based on the current screen size.
	 *
	 * @default true
	 */
	fixed?: boolean;
	/**
	 * The max-width of the container.
	 *
	 * @default 'large'
	 */
	maxWidth?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
}
