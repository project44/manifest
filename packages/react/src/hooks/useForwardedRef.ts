import * as React from 'react';

/**
 * Create a new ref object from a forwarded ref.
 */
export function useForwardedRef<T>(ref: React.ForwardedRef<T>): React.MutableRefObject<T | null> {
  const forwardedRef = React.useRef<T>(null);

  React.useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(forwardedRef.current);
    } else {
      ref.current = forwardedRef.current;
    }
  });

  return forwardedRef;
}
