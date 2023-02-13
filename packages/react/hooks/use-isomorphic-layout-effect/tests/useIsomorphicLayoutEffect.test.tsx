import { renderHook } from '@testing-library/react';
import { useIsomorphicLayoutEffect } from '../src';

test('should execute callback', () => {
  const callback = jest.fn();
  const { result } = renderHook(() => void useIsomorphicLayoutEffect(callback));

  expect(result.current).toBeUndefined();
  expect(callback).toHaveBeenCalled();
});
