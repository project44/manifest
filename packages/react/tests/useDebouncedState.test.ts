import { act, renderHook } from '@testing-library/react';
import { useDebouncedState } from '../src';

describe('useDebouncedState', () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should return default value on initial render', () => {
    const { result } = renderHook(() => useDebouncedState('default', 500));

    expect(result.current[0]).toBe('default');
  });

  it('should update value after specified delay', () => {
    const { result } = renderHook(() => useDebouncedState('default', 500));

    act(() => {
      result.current[1]('new value');
    });

    expect(result.current[0]).toBe('default');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current[0]).toBe('new value');
  });

  it('should clear previous timeout when setting new value', () => {
    const { result } = renderHook(() => useDebouncedState('default', 500));

    act(() => {
      result.current[1]('new value 1');
      jest.advanceTimersByTime(250);
      result.current[1]('new value 2');
      jest.advanceTimersByTime(250);
    });

    expect(result.current[0]).toBe('default');

    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(result.current[0]).toBe('new value 2');
  });

  it('should update value immediately when leading option is true', () => {
    const { result } = renderHook(() => useDebouncedState('default', 500, { leading: true }));

    act(() => {
      result.current[1]('new value');
    });

    expect(result.current[0]).toBe('new value');
  });
});
