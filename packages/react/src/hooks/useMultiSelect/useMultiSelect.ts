import * as React from 'react';
import { useCollator } from '@react-aria/i18n';
import { setInteractionModality } from '@react-aria/interactions';
import { useField } from '@react-aria/label';
import { useMenuTrigger } from '@react-aria/menu';
import type { SelectAria } from '@react-aria/select';
import { ListKeyboardDelegate, useTypeSelect } from '@react-aria/selection';
import { chain, filterDOMProps, mergeProps, useId } from '@react-aria/utils';
import type { KeyboardDelegate } from '@react-types/shared';
import type { AriaMultiSelectProps, MultiSelectState } from '../../types';

export interface AriaMultiSelectOptions<T> extends AriaMultiSelectProps<T> {
  /**
   * An optional keyboard delegate implementation for type to select,
   * to override the default.
   */
  keyboardDelegate?: KeyboardDelegate;
}

export function useMultiSelect<T>(
  props: AriaMultiSelectOptions<T>,
  state: MultiSelectState<T>,
  ref: React.RefObject<HTMLElement>,
): SelectAria<T> {
  const { keyboardDelegate, isDisabled } = props;

  const collator = useCollator({ usage: 'search', sensitivity: 'base' });
  const delegate = React.useMemo(
    () =>
      keyboardDelegate ??
      new ListKeyboardDelegate(state.collection, state.disabledKeys, null as never, collator),
    [keyboardDelegate, state.collection, state.disabledKeys, collator],
  );

  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    {
      isDisabled,
      type: 'listbox',
    },
    state,
    ref,
  );

  const { typeSelectProps } = useTypeSelect({
    keyboardDelegate: delegate,
    selectionManager: state.selectionManager,
    onTypeSelect: (key) => {
      if (state.selectedKeys === 'all') {
        state.setSelectedKeys(
          new Set([...state.collection].map((item) => item.key).filter((k) => k !== key)),
        );
      } else {
        state.setSelectedKeys(state.selectedKeys.add(key));
      }
    },
  });

  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField({
    ...props,
    labelElementType: 'span',
  });

  typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
  delete typeSelectProps.onKeyDownCapture;

  const domProps = filterDOMProps(props, { labelable: true });
  const triggerProps = mergeProps(typeSelectProps, menuTriggerProps, fieldProps);

  const valueId = useId();

  return {
    labelProps: {
      ...labelProps,
      onClick: () => {
        if (!props.isDisabled) {
          ref.current?.focus();

          // Show the focus ring so the user knows where focus went
          setInteractionModality('keyboard');
        }
      },
    },
    triggerProps: mergeProps(domProps, {
      ...triggerProps,
      onKeyDown: chain(triggerProps.onKeyDown, props.onKeyDown),
      onKeyUp: props.onKeyUp,
      'aria-labelledby': [
        triggerProps['aria-labelledby'],
        triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null,
        valueId,
      ]
        .filter(Boolean)
        .join(' '),
      onFocus(event: React.FocusEvent) {
        if (state.isFocused) {
          return;
        }

        if (props.onFocus) {
          props.onFocus(event);
        }

        if (props.onFocusChange) {
          props.onFocusChange(true);
        }

        state.setFocused(true);
      },
      onBlur(event: React.FocusEvent) {
        if (state.isOpen) {
          return;
        }

        if (props.onBlur) {
          props.onBlur(event);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }

        state.setFocused(false);
      },
    }),
    valueProps: {
      id: valueId,
    },
    menuProps: {
      ...menuProps,
      autoFocus: state.focusStrategy || true,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
      disallowEmptySelection: true,
      onBlur: (event: React.FocusEvent) => {
        if (event.currentTarget.contains(event.relatedTarget as Node)) {
          return;
        }

        if (props.onBlur) {
          props.onBlur(event);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }

        state.setFocused(false);
      },
      'aria-labelledby': [
        fieldProps['aria-labelledby'],
        triggerProps['aria-label'] && !fieldProps['aria-labelledby'] ? triggerProps.id : null,
      ]
        .filter(Boolean)
        .join(' '),
    },
    descriptionProps,
    errorMessageProps,
  };
}
