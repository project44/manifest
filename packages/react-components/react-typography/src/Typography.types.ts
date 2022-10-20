import { CSS } from '@project44-manifest/react-styles';

export interface TypographyClasses {
	root: string;
	body: string;
	bodyBold: string;
	caption: string;
	captionBold: string;
	display: string;
	heading: string;
	item: string;
	paragraph: string;
	subtext: string;
	subtextBold: string;
	subtitle: string;
	title: string;
}

export type TypographyElement = 'p';

export interface TypographyProps {
	/** Override classes for the component */
	classes?: Partial<TypographyClasses>;
	/** Theme aware style object */
	css?: CSS;
	/** Whether the element is a paragraph and should have margin bottom */
	paragraph?: boolean;
	/**
	 * The display variant of the text.
	 *
	 * @default 'body'
	 */
	variant?: TypographyVariant;
}

export type TypographyVariant =
	| 'body'
	| 'bodyBold'
	| 'caption'
	| 'captionBold'
	| 'display'
	| 'heading'
	| 'subtext'
	| 'subtextBold'
	| 'subtitle'
	| 'title';
