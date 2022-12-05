import * as React from 'react';
import { useMenuTriggerState } from '@react-stately/menu';
import type { MultiSelectProps, MultiSelectState } from '../types';
import { useMultiSelectListState } from './useMultiSelectListState';

/**
 * Pulled directly from the following library and augmented for our needs:
 *
 * https://github.com/so99ynoodles/headless-react/blob/main/packages/select/src/hooks/useMultiSelectState.tsx
 */
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
      if (listState.collection.size > 0) {
        triggerState.open();
      }
    },
    toggle(focusStrategy) {
      if (listState.collection.size > 0) {
        triggerState.toggle(focusStrategy);
      }
    },
    isFocused,
    setFocused,
  };
}
