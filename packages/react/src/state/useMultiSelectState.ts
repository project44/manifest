import type { MultiSelectProps, MultiSelectState } from '../types';
import * as React from 'react';
import { useMenuTriggerState } from '@react-stately/menu';
import { useMultiSelectListState } from './useMultiSelectListState';

export function useMultiSelectState<T extends object>(
  props: MultiSelectProps<T>,
): MultiSelectState<T> {
  const [isFocused, setFocused] = React.useState(false);

  const triggerState = useMenuTriggerState(props);
  const listState = useMultiSelectListState(props);

  return {
    ...listState,
    ...triggerState,
    close() {
      triggerState.close();
    },
    open() {
      // Don't open if the collection is empty.
      if (listState.collection.size !== 0) {
        triggerState.open();
      }
    },
    toggle(focusStrategy) {
      if (listState.collection.size !== 0) {
        triggerState.toggle(focusStrategy);
      }
    },
    isFocused,
    setFocused,
  };
}
