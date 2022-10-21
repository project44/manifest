import clsx from 'clsx';
import { isObject } from '@project44-manifest/utils';
import { mergeCallbacks } from './mergeCallbacks';
import type { Callback, Props, TupleTypes, UnionToIntersection } from './types';

/**
 * Merge multiple sets of props together
 *
 * Adapted from react-aria to support style objects
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeProps.ts
 */
export function mergeProps<T extends Props[]>(...args: T): UnionToIntersection<TupleTypes<T>> {
	const result: Record<string, unknown> = { ...args[0] };

	for (let i = 1; i < args.length; i += 1) {
		const props: Record<string, unknown> = args[i];

		for (const prop in props) {
			if (Object.prototype.hasOwnProperty.call(props, prop)) {
				const mergedValue = result[prop];
				const propValue = props[prop];

				// Merge classNames
				if (
					prop === 'className' &&
					typeof mergedValue === 'string' &&
					typeof propValue === 'string'
				) {
					result[prop] = clsx(mergedValue, propValue);

					// Merge styles
				} else if (prop === 'style' && isObject(mergedValue) && isObject(propValue)) {
					result[prop] = { ...mergedValue, ...propValue };

					// Merge event handlers that start with `on`
				} else if (
					typeof mergedValue === 'function' &&
					typeof propValue === 'function' &&
					/^on[A-Z]/.test(prop)
				) {
					result[prop] = mergeCallbacks(
						mergedValue as Callback<unknown[]>,
						propValue as Callback<unknown[]>,
					);
				} else {
					result[prop] = propValue ?? mergedValue;
				}
			}
		}
	}

	return result as UnionToIntersection<TupleTypes<T>>;
}
