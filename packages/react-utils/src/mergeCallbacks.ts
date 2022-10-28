import type { Callback } from './types';

/**
 * Merge all callbacks into a single callback function.
 */
export function mergeCallbacks<T extends unknown[]>(...fns: Callback<T>[]): Callback<T> {
	return (...args: T) => {
		fns.forEach((fn) => {
			if (typeof fn === 'function') {
				fn?.(...args);
			}
		});
	};
}
