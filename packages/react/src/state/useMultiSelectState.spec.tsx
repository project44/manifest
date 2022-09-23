import * as React from 'react';
import { Item } from '@react-stately/collections';
import { renderHook } from '@testing-library/react-hooks';
import { useMultiSelectState } from './useMultiSelectState';
import { act } from 'react-dom/test-utils';

describe('@project44-manifest/react - useMultiSelectState', () => {
  it('should return state and support events', () => {
    const { result } = renderHook(() =>
      useMultiSelectState({
        children: [
          <Item key="test">test</Item>,
          <Item key="test_2">test 2</Item>,
          <Item key="test_3">test 3</Item>,
        ],
      }),
    );

    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.selectionManager.selectionMode).toBe('multiple');

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBeTruthy();

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBeTruthy();
  });

  it('should return state and not support events if collection is empty', () => {
    const { result } = renderHook(() =>
      useMultiSelectState({
        children: [],
      }),
    );

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBeFalsy();
  });
});
