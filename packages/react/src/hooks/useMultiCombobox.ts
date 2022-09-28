import type { AriaMultiComboboxProps, MultiComboboxState } from '../types';
import type { ComboBoxState } from '@react-stately/combobox';
import type { KeyboardDelegate } from '@react-types/shared';
import * as React from 'react';
import { AriaComboBoxOptions, ComboBoxAria, useComboBox } from '@react-aria/combobox';

export interface AriaMultiComboboxOptions<T> extends AriaMultiComboboxProps<T> {
	/** The ref for the input element. */
	inputRef: React.RefObject<HTMLInputElement>;
	/** The ref for the list box popover. */
	popoverRef: React.RefObject<Element>;
	/** The ref for the list box. */
	listBoxRef: React.RefObject<HTMLElement>;
	/** The ref for the optional list box popup trigger button.  */
	buttonRef?: React.RefObject<Element>;
	/** An optional keyboard delegate implementation, to override the default. */
	keyboardDelegate?: KeyboardDelegate;
}

export function useMultiCombobox<T>(
	props: AriaMultiComboboxOptions<T>,
	state: MultiComboboxState<T>,
): ComboBoxAria<T> {
	return useComboBox(props as AriaComboBoxOptions<T>, state as unknown as ComboBoxState<T>);
}
