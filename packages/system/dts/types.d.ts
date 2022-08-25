import * as React from 'react';
export interface AsProp<T extends React.ElementType> {
    as?: T;
}
export interface Component<Props extends object = Record<string, never>> {
    <T extends React.ElementType>(props: ComponentProps<T, Omit<Props, 'css'>>): JSX.Element;
    displayName?: string;
    id?: string;
    propTypes?: any;
}
export declare type ComponentProps<T extends React.ElementType, P extends object = Record<string, never>> = MergeProps<T, P & AsProp<T>>;
export declare type MergeProps<T extends React.ElementType, P extends object = Record<string, never>> = P & Omit<PropsOf<T>, keyof P>;
export declare type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
//# sourceMappingURL=types.d.ts.map