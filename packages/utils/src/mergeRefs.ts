import type * as React from 'react';

export function mergeRefs<T>(...refs: React.ForwardedRef<T>[]) {
  return (value: T) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
        ref.current = value;
      }
    }
  };
}
