import * as React from 'react';
import { Item } from '@react-stately/collections';
import { renderHook } from '@testing-library/react-hooks';
import { useMultiSelectListState } from './useMultiSelectListState';

describe('@project44-manifest/react - useMultiSelectListState', () => {
	it('should return state', () => {
		const { result } = renderHook(() => useMultiSelectListState({ children: [] }));

		expect(result.current.selectedItems).toEqual([]);
		expect(result.current.selectionManager.selectionMode).toBe('multiple');
	});

	it('should return state with selected keys', () => {
		const { result } = renderHook(() =>
			useMultiSelectListState({
				children: [
					<Item key="test">test</Item>,
					<Item key="test_2">test 2</Item>,
					<Item key="test_3">test 3</Item>,
				],
				selectedKeys: new Set(['test_2', 'test_3']),
			}),
		);

		expect(result.current.collection.size).toBe(3);
		expect(result.current.selectedItems).toHaveLength(2);
	});

	it('should return state with all keys selected', () => {
		const { result } = renderHook(() =>
			useMultiSelectListState({
				children: [
					<Item key="test">test</Item>,
					<Item key="test_2">test 2</Item>,
					<Item key="test_3">test 3</Item>,
				],
				selectedKeys: 'all',
			}),
		);

		expect(result.current.collection.size).toBe(3);
		expect(result.current.selectedItems).toHaveLength(3);
	});
});
