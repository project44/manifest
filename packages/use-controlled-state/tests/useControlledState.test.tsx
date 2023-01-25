import { act, renderHook } from '@testing-library/react';
import { useControlledState } from '../src';

describe('useControlledState', () => {
  it('should handle uncontrolled values', () => {
    const onChange = jest.fn();

    const { result } = renderHook(() =>
      useControlledState<string | undefined>(undefined, 'defaultValue', onChange),
    );

    let [value, setValue] = result.current;

    expect(value).toBe('defaultValue');
    expect(onChange).not.toHaveBeenCalled();

    act(() => void setValue('newValue'));

    [value, setValue] = result.current;

    expect(value).toBe('newValue');
    expect(onChange).toHaveBeenLastCalledWith('newValue');

    onChange.mockClear();

    // Should not call onChange if value is the same.
    act(() => void setValue('newValue'));

    [value, setValue] = result.current;

    expect(value).toBe('newValue');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should handle controlled values', () => {
    const onChange = jest.fn();

    const { result } = renderHook(() =>
      useControlledState<string>('value', 'defaultValue', onChange),
    );

    let [value, setValue] = result.current;

    expect(value).toBe('value');
    expect(onChange).not.toHaveBeenCalled();

    act(() => void setValue('newValue'));

    [value, setValue] = result.current;

    expect(value).toBe('value');
    expect(onChange).toHaveBeenLastCalledWith('newValue');

    onChange.mockClear();

    act(() => void setValue('value'));

    [value, setValue] = result.current;

    // Should not call onChange if value is the same.
    expect(value).toBe('value');
    expect(onChange).not.toHaveBeenCalled();
  });
});
