import type { Component, Options, Props } from './types';
import * as React from 'react';

/**
 * Creates a type-safe component with the `as` prop and `React.forwardRef`.
 *
 * Inspired by ariakit and chakra-ui.
 */
export function createComponent<O extends Options>(
	component: React.ForwardRefRenderFunction<any, Props<O>>,
) {
	return React.forwardRef(component) as unknown as Component<O>;
}
