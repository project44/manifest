import type {
  AriaLabelingProps,
  AsyncLoadable,
  CollectionBase,
  DOMProps,
  FocusableDOMProps,
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  MultipleSelection,
  Node,
  Selection,
  TextInputBase,
  Validation,
} from '@react-types/shared';
import type { AriaHiddenSelectProps } from '@react-aria/select';
import type { ListState } from '@react-stately/list';
import type { MenuTriggerState } from '@react-stately/menu';
import type { MultipleSelectionStateProps } from '@react-stately/selection';
import type { RefObject } from 'react';
import type { CSS } from './styles';

export interface AriaMultiSelectProps<T>
  extends MultiSelectProps<T>,
    DOMProps,
    AriaLabelingProps,
    FocusableDOMProps {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string;
  /**
   * The name of the input, used when submitting an HTML form.
   */
  name?: string;
}

export interface HiddenMultiSelectProps<T> extends AriaHiddenSelectProps {
  /** State for the select. */
  state: MultiSelectState<T>;

  /** A ref to the trigger element. */
  triggerRef: RefObject<HTMLElement>;
}

export interface MultiSelectProps<T>
  extends CollectionBase<T>,
    AsyncLoadable,
    Omit<InputBase, 'isReadOnly'>,
    Validation,
    HelpTextProps,
    LabelableProps,
    TextInputBase,
    Omit<MultipleSelection, 'disallowEmptySelection'>,
    FocusableProps {
  /** Sets the open state of the menu. */
  isOpen?: boolean;
  /** Sets the default open state of the menu. */
  defaultOpen?: boolean;
  /** Method that is called when the open state of the menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
}

export interface MultiSelectListProps<T> extends CollectionBase<T>, MultipleSelectionStateProps {
  /** Filter function to generate a filtered list of nodes. */
  filter?: (nodes: Iterable<Node<T>>) => Iterable<Node<T>>;
  /** @private */
  suppressTextValueWarning?: boolean;
}

export interface MultiSelectListState<T> extends ListState<T> {
  /** The value of the currently selected item. */
  readonly selectedItems: Node<T>[];
  /** The key for the currently selected item. */
  readonly selectedKeys: Selection;
  /** Sets the selected keys. */
  setSelectedKeys(keys: Set<React.Key>): void;
}

export interface MultiSelectState<T> extends MultiSelectListState<T>, MenuTriggerState {
  /** Whether the select is currently focused. */
  readonly isFocused: boolean;
  /** Sets whether the select is focused. */
  setFocused(isFocused: boolean): void;
}

export interface StyleProps {
  /** Theme aware style object. */
  css?: CSS;
}

export type { Selection };
