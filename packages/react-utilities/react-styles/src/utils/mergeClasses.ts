import { cx } from './cx';

type Classes<ClassKey extends string> = Record<ClassKey, string>;

/**
 * Create an object of merged class names.
 */
export function mergeClasses<ClassKey extends string>(
	classes: Classes<ClassKey>,
	overrideClasses: Partial<Classes<ClassKey>> = {},
): Classes<ClassKey> {
	const keys = Object.keys(classes) as (keyof typeof classes)[];

	return keys.reduce<Record<string, string>>((acc, cur) => {
		acc[cur] = cx(classes[cur], overrideClasses?.[cur]);

		return acc;
	}, {}) as Classes<ClassKey>;
}
