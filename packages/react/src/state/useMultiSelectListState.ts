import type { MultiSelectListProps, MultiSelectListState } from '../types';
import type { Selection } from '@react-types/shared';
import { useListState } from '@react-stately/list';
import { useControlledState } from '@react-stately/utils';

export function useMultiSelectListState<T extends object>(
  props: MultiSelectListProps<T>,
): MultiSelectListState<T> {
  const {
    defaultSelectedKeys = new Set(),
    onSelectionChange,
    selectedKeys: selectedKeysProp,
  } = props;

  const [selectedKeys, setSelectedKeys] = useControlledState<Selection>(
    selectedKeysProp as Selection,
    defaultSelectedKeys as Selection,
    onSelectionChange!,
  );

  const { collection, disabledKeys, selectionManager } = useListState({
    ...props,
    allowDuplicateSelectionEvents: true,
    selectionMode: 'multiple',
    selectedKeys,
    onSelectionChange: (keys: Selection) => {
      if (props.onSelectionChange) {
        props.onSelectionChange(keys);
      }

      setSelectedKeys(keys);
    },
  });

  const selectedItems =
    selectedKeys === 'all'
      ? [...collection]
      : [...selectedKeys].map(key => collection.getItem(key));

  return {
    collection,
    disabledKeys,
    selectionManager,
    selectedKeys,
    setSelectedKeys: setSelectedKeys.bind(selectionManager),
    selectedItems,
  };
}
