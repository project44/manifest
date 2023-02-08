import { act, renderHook } from '@testing-library/react';
import { useDebouncedState } from '../src';

describe('useDebouncedState', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  let timeoutCallback: Function;
  const setTimeout = jest.spyOn(window, 'setTimeout').mockImplementation(((cb: Function) => {
    timeoutCallback = cb;
    return 1;
  }) as any);
  const clearTimeout = jest.spyOn(window, 'clearTimeout').mockReturnValue();

  it('should run without errors', () => {
    expect(clearTimeout).toHaveBeenCalledTimes(0);
    renderHook(() => useDebouncedState('asdf1', 100));
    renderHook(() => useDebouncedState('asdf1', 100, { leading: false }));
    renderHook(() => useDebouncedState('asdf1', 100, { leading: true }));
  });

  it('should debounce value with leading=false', () => {
    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(clearTimeout).toHaveBeenCalledTimes(0);

    const hook = renderHook(() => useDebouncedState('test1', 100));
    expect(hook.result.current[0]).toBe('test1');

    act(() => void hook.result.current[1]('test2'));
    expect(hook.result.current[0]).toBe('test1');

    act(() => void hook.result.current[1]('test3'));
    expect(hook.result.current[0]).toBe('test1');

    void act(() => timeoutCallback());
    expect(hook.result.current[0]).toBe('test3');

    clearTimeout.mockReset();
    expect(clearTimeout).toHaveBeenCalledTimes(0);
    act(() => void hook.unmount());
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });

  it('should debounce value with leading=true', () => {
    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(clearTimeout).toHaveBeenCalledTimes(0);

    const hook = renderHook(() => useDebouncedState('test1', 100, { leading: true }));
    expect(hook.result.current[0]).toBe('test1');

    act(() => void hook.result.current[1]('test2'));
    expect(hook.result.current[0]).toBe('test2');

    act(() => void hook.result.current[1]('test3'));
    expect(hook.result.current[0]).toBe('test2');

    void act(() => timeoutCallback());
    expect(hook.result.current[0]).toBe('test3');

    clearTimeout.mockReset();
    expect(clearTimeout).toHaveBeenCalledTimes(0);
    act(() => void hook.unmount());
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});
