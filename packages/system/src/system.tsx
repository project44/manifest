import * as React from 'react';
import type { Component, Options, Props } from './types';

/**
 * Creates a type-safe component with the `as` prop and `React.forwardRef`.
 *
 * Inspired by ariakit and chakra-ui.
 */
export function createComponent<O extends Options>(
  // The function is being removed in favor of our Polymorphic types.
   
  component: React.ForwardRefRenderFunction<any, Props<O>>,
) {
  return React.forwardRef(component) as unknown as Component<O>;
}
