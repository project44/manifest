import * as React from 'react';

/**
 * Polymorphic as.
 */
export type As<Props = any> = React.ElementType<Props>;

/**
 * Extend and override a set of source props.
 */
export type ExtendableProps<S = {}, E = {}> = E & Omit<S, keyof E>;

/**
 * Props with the polymorphic `as` prop.
 */
export type PropsWithAs<P, T extends As> = P & { as?: T };

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
export type PolymorphicPropsWithRef<T extends As, P = {}> = ExtendableProps<
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
export type PolymorphicRef<T extends As> = React.ComponentPropsWithRef<T>['ref'];

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
export interface PolymorphicComponent<T extends As, P = {}>
	extends React.ForwardRefExoticComponent<PolymorphicPropsWithRef<T, P>> {
	<C extends As = T>(props: PolymorphicPropsWithRef<C, P>): React.ReactElement | null;

	displayName?: string;
	propTypes?: React.WeakValidationMap<any>;
	contextTypes?: React.ValidationMap<any>;
	defaultProps?: Partial<any>;
	id?: string;
}
