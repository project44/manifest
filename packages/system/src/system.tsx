import type { Component, ComponentProps } from './types';
import * as React from 'react';

/**
 * Creates a type-safe component with the `as` prop and `React.forwardRef`.
 *
 * Inspired by ariakit and chakra-ui.
 */
export function createComponent<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  P extends object,
>(component: React.ForwardRefRenderFunction<any, ComponentProps<T, P>>) {
  return React.forwardRef(component) as unknown as Component<P>;
}
