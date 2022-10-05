import * as React from 'react';

/**
 * Extend and override a set of source props.
 */
export type ExtendableProps<S = {}, E = {}> = E & Omit<S, keyof E>;

/**
 * Props with the polymorphic `as` prop.
 */
export type PropsWithAs<P, T extends React.ElementType> = P & { as?: T };

/**
 * Props with the polymorphic `as` prop and ref.
 *
 * @example
 * ```tsx
 * import { PolymorphicPropsWithRef } from '@project44-manifest/react-types';
 *
 * type ComponentElement = 'div';
 *
 * export interface ComponentOptions {
 *  isActive?: boolean;
 * }
 *
 * export interface ComponentProps extends PolymorphicPropsWithRef<ComponentElement, ComponentOptions> {}
 * ```
 *
 */
export type PolymorphicPropsWithRef<T extends React.ElementType, P = {}> = ExtendableProps<
	React.ComponentPropsWithRef<T>,
	PropsWithAs<P, T>
>;

/**
 * Ref of the polymorphic `as` element.
 *
 * @example
 * ```tsx
 * import { PolymorphicRef } from '@project44-manifest/react-types';
 *
 * export type ComponentRef = PolymorphicRef<'div'>;
 *
 */
export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

/**
 * A component with support for the polymorphic `as` prop and ref.
 *
 * @example
 * ```tsx
 * import { PolymorphicComponent, PolymorphicPropsWithRef } from '@project44-manifest/react-types';
 *
 * type ComponentElement = 'div';
 *
 * export interface ComponentOptions {
 *  isActive?: boolean;
 * }
 *
 * export interface ComponentProps extends PolymorphicPropsWithRef<ComponentElement, ComponentOptions> {}
 *
 * export const Component = React.forwardRef((props: ComponentProps, ref: PolymorphicRef<ComponentElement>) => { ... }) as PolymorphicComponent<ComponentElement, ComponentOptions>;
 * ```
 *
 */
export interface PolymorphicComponent<T extends React.ElementType, P = {}>
	extends React.ForwardRefExoticComponent<PolymorphicPropsWithRef<T, P>> {
	<C extends React.ElementType = T>(
		props: PolymorphicPropsWithRef<C, P>,
	): React.ReactElement | null;

	displayName?: string;
	id?: string;
}
