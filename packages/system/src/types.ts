import * as React from 'react';

/**
 * Overridable element prop.
 */
export interface AsProp<T extends React.ElementType> {
  /**
   * The element used for the root node.
   */
  as?: T;
}

/**
 * Component interface with support for `as` prop.
 */
export interface Component<Props extends object = Record<string, never>> {
  <T extends React.ElementType>(props: ComponentProps<T, Omit<Props, 'css'>>): JSX.Element;

  displayName?: string;
  id?: string;
  propTypes?: any;
}

/**
 * Props inferred from a dom element and merged with custom props.
 */
export type ComponentProps<
  T extends React.ElementType,
  P extends object = Record<string, never>,
> = MergeProps<T, P & AsProp<T>>;

/**
 * Merge props from and element and user defined props.
 */
export type MergeProps<T extends React.ElementType, P extends object = Record<string, never>> = P &
  Omit<PropsOf<T>, keyof P>;

/**
 * Utility type for getting props type of React component.
 *
 * https://github.com/emotion-js/emotion/blob/main/packages/react/types/helper.d.ts
 */
export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
  JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
