import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { useMergedRef } from '../src';

describe('useMergedRef', () => {
  it('should return merged refs', () => {
    const ref = React.createRef();
    const callbackRef = jest.fn();

    const node = document.createElement('div');

    const { result } = renderHook(() => useMergedRef(ref, callbackRef));

    result.current(node);

    expect(typeof result.current).toBe('function');
    expect(ref.current).toBe(node);
    expect(callbackRef).toHaveBeenCalledWith(node);
  });
});
