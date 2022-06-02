import { renderHook } from '@testing-library/react';
import { useForwardedRef } from '../useForwardedRef';

describe('@manifest/react - useForwardedRef', () => {
  it('should be defined', () => {
    expect(useForwardedRef).toBeDefined();
  });

  it('should create a ref object from a ref', () => {
    const ref = { current: undefined };

    const { result } = renderHook(() => useForwardedRef(ref));

    expect(result.current.current).toBe(ref.current);
  });

  it('should create a ref object from function ref', () => {
    let current;

    const ref = (ref: any) => void (current = ref);

    const { result } = renderHook(() => useForwardedRef(ref));

    expect(result.current.current).toBe(current);
  });

  it('should handle null refs', () => {
    const { result } = renderHook(() => useForwardedRef(null));

    expect(result.current.current).toBeDefined();
  });
});
