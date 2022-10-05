/* eslint-disable @typescript-eslint/no-explicit-any */
// Will be removing this file in the near future
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
		props: Omit<HTMLProps<Options<T>>, keyof O> & Omit<O, 'as'> & Required<Options<T>>,
	): JSX.Element | null;
	(props: Props<O>): JSX.Element | null;

	displayName?: string;
	id?: string;
	propTypes?: any;
}

/**
 * Props inferred from the as prop.
 */
export type HTMLProps<O extends Options> = Omit<
	React.ComponentPropsWithRef<NonNullable<O['as']>>,
	keyof O | 'children'
> & {
	[index: `data-${string}`]: unknown;
	children?: React.ReactNode;
};

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
export type Props<O extends Options> = HTMLProps<O> & O;
