import * as React from 'react';

/** -------------------------------
 * Utilities
 * ------------------------------*/
export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

/** ------------------------------
 * Props
 * ------------------------------*/

// We do not know the type of the element, any is ok here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OwnProps<E> = E extends ForwardRefComponent<any, infer P> ? P : {};

/** ------------------------------
 * Polymorphic types
 *
 * These types are borrowed from the team at reach-ui.
 * Their package is for internal use, so copy and pasting here.
 *
 * see: https://github.com/reach/reach-ui/blob/dev/packages/polymorphic/src/reach-polymorphic.ts
 *------------------------------*/

export type ForwardRefExoticComponent<E, P> = React.ForwardRefExoticComponent<
	Merge<E extends React.ElementType ? React.ComponentPropsWithRef<E> : never, P & { as?: E }>
>;

export interface ForwardRefComponent<
	IntrinsicElementString,
	Props = {},
	/**
	 * Extends original type to ensure built in React types play nice
	 * with polymorphic components still e.g. `React.ElementRef` etc.
	 */
> extends ForwardRefExoticComponent<IntrinsicElementString, Props> {
	/*
	 * When `as` prop is passed, use this overload. Merges original own props
	 * (without DOM props) and the inferred props from `as` element with the own
	 * props taking precendence.
	 *
	 * We explicitly avoid `React.ElementType` and manually narrow the prop types
	 * so that events are typed when using JSX.IntrinsicElements.
	 */
	<As = IntrinsicElementString>(
		props: As extends ''
			? { as: keyof JSX.IntrinsicElements }
			: As extends React.ComponentType<infer P>
			? Merge<P, Props & { as: As }>
			: As extends keyof JSX.IntrinsicElements
			? Merge<JSX.IntrinsicElements[As], Props & { as: As }>
			: never,
	): React.ReactElement | null;
}
