import * as React from 'react';

export function useDebouncedState<T = unknown>(
  defaultValue: T,
  wait: number,
  options = { leading: false },
) {
  const [value, setValue] = React.useState(defaultValue);
  const timeoutRef = React.useRef<number>();
  const leadingRef = React.useRef(true);

  const clearTimeout = React.useCallback(
    () => void window.clearTimeout(timeoutRef.current),
    [timeoutRef],
  );

  React.useEffect(() => clearTimeout, [clearTimeout]);

  const debouncedSetValue = (newValue: T) => {
    clearTimeout();

    if (leadingRef.current && options.leading) {
      setValue(newValue);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        leadingRef.current = true;
        setValue(newValue);
      }, wait);
    }

    leadingRef.current = false;
  };

  return [value, debouncedSetValue] as const;
}
