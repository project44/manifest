import { CSS } from '@project44-manifest/react-styles';

export interface BoxClasses {
	root: string;
}

export type BoxElement = 'div';

export interface BoxProps {
	/** Override classes for the component */
	classes?: Partial<BoxClasses>;
	/** Theme aware style object */
	css?: CSS;
}
