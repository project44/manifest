import type { Component, ComponentProps } from './types';
import * as React from 'react';
export declare function createComponent<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>, P extends object>(component: React.ForwardRefRenderFunction<any, ComponentProps<T, P>>): Component<P>;
//# sourceMappingURL=system.d.ts.map