import type * as React from 'react';

/**
 * Merge multiple refs into one ref.
 *
 * Adapted from react-aria
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeRefs.ts
 */
export function mergeRefs<T>(...refs: React.ForwardedRef<T>[]) {
  return (value: T) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != undefined) {
        // We need to assign the ref directly.
         
        ref.current = value;
      }
    }
  };
}
