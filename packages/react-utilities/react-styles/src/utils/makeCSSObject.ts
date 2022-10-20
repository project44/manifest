import type { CSS } from '../stitches';
import type { StyleObject } from '../types';

const BUILTINS = new Set(['compoundVariants', 'defaultVariants', 'root', 'variants']);

/**
 * Create a CSS object based off of our style object for use with the stitches css function.
 */
export function makeCSSObject<ClassKey extends string>(
	styleObject: StyleObject<ClassKey>,
	slot: string,
	prefix: string = 'manifest',
): CSS {
	const result: CSS = {};

	for (const key in styleObject) {
		// Omitting the root key as we will merge these selectors with the root style object.
		// See the stitches API for reference
		// https://stitches.dev/docs/api#style-object
		if (Object.prototype.hasOwnProperty.call(styleObject, key) && !BUILTINS.has(key)) {
			result[`& .${prefix}-${slot}-${key}`] = styleObject[key as keyof typeof styleObject];
		}
	}

	return { ...styleObject.root, ...result };
}
