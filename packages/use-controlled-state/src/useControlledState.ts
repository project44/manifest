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

  const { current: isControlled } = React.useRef(value !== undefined);
  const prevValueRef = React.useRef(stateValue);

  const handleChange = React.useCallback(
    (nextValue: T, ...args: any[]) => {
      if (prevValueRef.current !== nextValue) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onChange?.(nextValue, ...args);
      }

      if (!isControlled) {
        prevValueRef.current = nextValue;
      }
    },
    [isControlled, onChange, prevValueRef],
  );

  const handleSetValue = React.useCallback(
    (nextValue: T, ...args: any[]) => {
      if (!isControlled) setStateValue(nextValue);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      handleChange(nextValue, ...args);
    },
    [handleChange, isControlled],
  );

  if (isControlled) {
    prevValueRef.current = value;
  }

  return [isControlled ? value : stateValue, handleSetValue];
}
