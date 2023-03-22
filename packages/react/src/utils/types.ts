export type Callback<T extends unknown[]> = ((...args: T) => void) | undefined;

// Cloning the types from react-aria, need to preserve the types for the mergeProps function to be typed correctly
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type TupleTypes<T> = { [P in keyof T]: T[P] } extends Record<number, infer V> ? V : never;

export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
