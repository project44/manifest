import type { CSS, Theme } from './stitches';

export type StyleObject<K extends string> = Record<K, CSS> & {
	root: CSS;
};

export type Styles<Props extends object, ClassKey extends string> =
	| StyleObject<ClassKey>
	| ((theme: Theme, props: Props) => StyleObject<ClassKey>);
