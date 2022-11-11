import type * as React from 'react';

/**
 * Merge multiple refs into one ref.
 *
 * Adapted from react-aria
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeRefs.ts
 */
export function mergeRefs<T>(...refs: React.ForwardedRef<T>[]) {
	return (value: T) => {
		refs.forEach((ref) => {
			if (typeof ref === 'function') {
				ref(value);
			} else if (ref != null) {
				// We need to assign the ref directly.
				// eslint-disable-next-line no-param-reassign
				ref.current = value;
			}
		});
	};
}
