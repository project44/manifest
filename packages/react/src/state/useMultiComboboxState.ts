import type { MultiComboboxProps, MultiComboboxState, Selection } from '../types';
import type { FocusStrategy } from '@react-types/shared';
import type { MenuTriggerAction } from '@react-types/combobox';
import * as React from 'react';
import { filterCollection } from '../utils';
import { useMenuTriggerState } from '@react-stately/menu';
import { useMultiSelectListState } from './useMultiSelectListState';
import { useControlledState } from '@react-stately/utils';

export interface MultiComboBoxStateProps<T> extends MultiComboboxProps<T> {
  /** The filter function used to determine if a option should be included in the combo box list. */
  defaultFilter?: (textValue: string, inputValue: string) => boolean;
  /** Whether the combo box allows the menu to be open when the collection is empty. */
  allowsEmptyCollection?: boolean;
  /** Whether the combo box menu should close on blur. */
  shouldCloseOnBlur?: boolean;
}

/**
 * Pulled directly from the following library and augmented for our needs:
 *
 * https://github.com/so99ynoodles/headless-react/blob/main/packages/combobox/src/hooks/useMultiComboBoxState.tsx
 *
 * Original created by react-aria:
 *
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/combobox/src/useComboBoxState.ts
 */
export function useMultiComboboxState<T extends object>(
  props: MultiComboBoxStateProps<T>,
): MultiComboboxState<T> {
  const {
    allowsEmptyCollection = false,
    allowsCustomValue,
    defaultFilter,
    defaultItems,
    defaultInputValue = '',
    inputValue: inputValueProp,
    items,
    menuTrigger = 'input',
    onInputChange,
    onOpenChange,
    onSelectionChange,
    selectedKeys: selectedKeysProp,
    shouldCloseOnBlur = true,
  } = props;

  const [showAllItems, setShowAllItems] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const [inputValue, setInputValue] = useControlledState(
    inputValueProp as string,
    defaultInputValue,
    onInputChange!,
  );

  const renderedRef = React.useRef(true);
  const valueRef = React.useRef(inputValue);
  const triggerTypeRef = React.useRef('focus' as MenuTriggerAction);

  const resetInputValue = () => {
    valueRef.current = '';

    setInputValue('');
  };

  const handleOpenChange = React.useCallback((isOpen: boolean) => {
    onOpenChange?.(isOpen, isOpen ? triggerTypeRef.current : undefined);
  }, []);

  const handleSelectionChange = React.useCallback((keys: Selection) => {
    onSelectionChange?.(keys);

    resetInputValue();

    triggerState.close();
  }, []);

  const triggerState = useMenuTriggerState({
    ...props,
    onOpenChange: handleOpenChange,
    isOpen: undefined,
    defaultOpen: undefined,
  });

  const {
    collection,
    selectionManager,
    selectedKeys,
    setSelectedKeys,
    selectedItems,
    disabledKeys,
  } = useMultiSelectListState({
    ...props,
    items: items ?? defaultItems,
    onSelectionChange: handleSelectionChange,
  });

  // Preserve original collection so we can show all items on demand
  const originalCollection = collection;
  const filteredCollection = React.useMemo(
    () =>
      // No default filter if items are controlled.
      items != null || !defaultFilter
        ? collection
        : filterCollection(collection, inputValue, defaultFilter),
    [collection, inputValue, defaultFilter, items],
  );

  const open = (focusStrategy?: FocusStrategy, trigger?: MenuTriggerAction) => {
    const displayAllItems =
      trigger === 'manual' || (trigger === 'focus' && menuTrigger === 'focus');

    // Prevent open operations from triggering if there is nothing to display
    // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
    // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
    if (
      allowsEmptyCollection ||
      filteredCollection.size > 0 ||
      (displayAllItems && originalCollection.size > 0) ||
      items
    ) {
      if (displayAllItems && !triggerState.isOpen && items === undefined) {
        // Show all items if menu is manually opened. Only care about this if items are undefined
        setShowAllItems(true);
      } else {
        setShowAllItems(false);
      }

      triggerTypeRef.current = trigger!;

      triggerState.open(focusStrategy);
    }
  };

  const revert = () => {
    if (allowsCustomValue && [...selectedKeys].length) {
      commitCustomValue();
    } else {
      commitSelection();
    }
  };

  const commitCustomValue = () => {
    setSelectedKeys(new Set([...selectedKeys, inputValue]));
    resetInputValue();

    triggerState.close();
  };

  const commitSelection = () => {
    // If multiple things are controlled, call onSelectionChange
    if (selectedKeysProp !== undefined && inputValueProp !== undefined) {
      onSelectionChange?.(selectedKeys);

      // Stop menu from reopening from useEffect
      const itemText = collection.getItem(selectionManager.focusedKey).textValue ?? '';

      valueRef.current = itemText;
    }

    // If only a single aspect of combobox is controlled, reset input value and close menu for the user
    resetInputValue();

    triggerState.close();
  };

  const commit = () => {
    if (triggerState.isOpen && selectionManager.focusedKey != null) {
      // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
      // fire onSelectionChange to allow the application to control the closing.
      if ([...selectedKeys].includes(selectionManager.focusedKey)) {
        setSelectedKeys(
          new Set([...selectedKeys].filter(key => key !== selectionManager.focusedKey)),
        );
        commitSelection();
      } else {
        setSelectedKeys(new Set([...selectedKeys, selectionManager.focusedKey]));
        commitSelection();
      }
    } else if (allowsCustomValue) {
      commitCustomValue();
    } else {
      // Reset inputValue and close menu if no item is focused but user triggers a commit
      commitSelection();
    }
  };

  const setFocused = (isFocused: boolean) => {
    if (isFocused) {
      if (menuTrigger === 'focus') {
        open(null as unknown as FocusStrategy, 'focus');
      }
    } else if (shouldCloseOnBlur) {
      const itemTexts = [...collection].map(item => item.textValue);

      if (allowsCustomValue && !itemTexts.includes(inputValue)) {
        commitCustomValue();
      } else {
        commitSelection();
      }
    }

    setIsFocused(isFocused);
  };

  const toggle = (focusStrategy?: FocusStrategy, trigger?: MenuTriggerAction) => {
    const displayAllItems =
      trigger === 'manual' || (trigger === 'focus' && menuTrigger === 'focus');

    // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
    if (
      !(
        allowsEmptyCollection ||
        filteredCollection.size > 0 ||
        (displayAllItems && originalCollection.size > 0) ||
        items
      ) &&
      !triggerState.isOpen
    ) {
      return;
    }

    if (displayAllItems && !triggerState.isOpen && items === undefined) {
      // Show all items if menu is toggled open. Only care about this if items are undefined
      setShowAllItems(true);
    }

    // Only update the menuOpenTrigger if menu is currently closed
    if (!triggerState.isOpen) {
      triggerTypeRef.current = trigger!;
    }

    triggerState.toggle(focusStrategy);
  };

  // intentional omit dependency array, want this to happen on every render
  React.useEffect(() => {
    // Open and close menu automatically when the input value changes if the input is focused,
    // and there are items in the collection or allowEmptyCollection is true.
    if (
      isFocused &&
      (filteredCollection.size > 0 || allowsEmptyCollection) &&
      inputValue !== valueRef.current &&
      !triggerState.isOpen &&
      menuTrigger !== 'manual'
    ) {
      open(null as unknown as FocusStrategy, 'input');
    }

    // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
    // but we are currently showing all items via button press
    if (
      !showAllItems &&
      !allowsEmptyCollection &&
      triggerState.isOpen &&
      filteredCollection.size === 0
    ) {
      triggerState.close();
    }

    // If it is the intial render and inputValue isn't controlled nor has an intial value, set input to match current selected key if any
    if (renderedRef.current && inputValueProp === undefined && defaultInputValue === undefined) {
      resetInputValue();
    }

    valueRef.current = inputValue;
    renderedRef.current = false;
  });

  React.useEffect(() => {
    // Reset focused key when the menu closes
    if (!triggerState.isOpen) {
      selectionManager.setFocusedKey(null as unknown as React.Key);
    }
  }, [triggerState.isOpen, selectionManager]);

  return {
    ...triggerState,
    toggle,
    open,
    selectionManager,
    selectedKeys,
    setSelectedKeys,
    disabledKeys,
    isFocused,
    setFocused,
    selectedItems,
    collection: showAllItems ? originalCollection : filteredCollection,
    inputValue,
    setInputValue,
    commit,
    revert,
  };
}
