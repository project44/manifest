import { renderHook } from '@testing-library/react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

describe('@manifest/react - useIsomorphicLayoutEffect', () => {
  it('should be defined', () => {
    expect(useIsomorphicLayoutEffect).toBeDefined();
  });

  it('should execute callback', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useIsomorphicLayoutEffect(callback));

    expect(result.current).toBeUndefined();
    expect(callback).toHaveBeenCalled();
  });
});
