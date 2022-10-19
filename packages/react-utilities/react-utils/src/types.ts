export type Callback<T extends unknown[]> = ((...args: T) => void) | undefined;

export type Props = Record<string, unknown>;

export type TupleTypes<T> = { [P in keyof T]: T[P] } extends Record<number, infer V> ? V : never;

export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (
	k: infer I,
) => void
	? I
	: never;
