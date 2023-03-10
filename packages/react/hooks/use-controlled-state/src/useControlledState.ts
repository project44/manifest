import * as React from 'react';

/**
 * A react hook used to manage controlled and uncontrolled states.
 */
export function useControlledState<T>(
  value: T,
  defaultValue: T,
  onChange: (value: T, ...args: any[]) => void,
): [T, (value: T, ...args: any[]) => void] {
  const [stateValue, setStateValue] = React.useState(defaultValue);

  const isControlled = value !== undefined;

  const currentValue = isControlled ? value : stateValue;

  const handleChange = React.useCallback(
    (next: React.SetStateAction<T>) => {
      const setter = next as (prevState?: T) => T;
      const nextValue = typeof next === 'function' ? setter(value) : next;

      if (value === nextValue) return;

      if (!isControlled) {
        setStateValue(nextValue);
      }

      onChange(nextValue);
    },
    [isControlled, onChange, value],
  );

  return [currentValue, handleChange] as [T, React.Dispatch<React.SetStateAction<T>>];
}
