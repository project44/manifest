import * as React from 'react';

// Borrowed and extended from ariakit
// https://github.com/ariakit/ariakit/blob/main/packages/ariakit-react-utils/src/types.ts

/**
 * The `as` prop.
 */
export type As<P = any> = React.ElementType<P>;

/**
 * Component interface with support for `as` prop.
 */
export interface Component<O extends Options> {
	<T extends As>(
		props: Omit<O, 'as'> & Omit<HTMLProps<Options<T>>, keyof O> & Required<Options<T>>,
	): JSX.Element | null;
	(props: Props<O>): JSX.Element | null;

	displayName?: string;
	id?: string;
	propTypes?: any;
}

/**
 * Props inferred from the as prop.
 */
export type HTMLProps<O extends Options> = {
	children?: React.ReactNode;
	[index: `data-${string}`]: unknown;
} & Omit<React.ComponentPropsWithRef<NonNullable<O['as']>>, keyof O | 'children'>;

/**
 * Options with the `as` and `css` options.
 */
export interface Options<T extends As = any> {
	/**  */
	as?: T;
}

/**
 * Options & HTMLProps
 */
export type Props<O extends Options> = O & HTMLProps<O>;
