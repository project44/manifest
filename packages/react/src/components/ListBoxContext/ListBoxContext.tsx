import type { ListState } from '@react-stately/list';
import { createContext, useContext } from 'react';

export interface ListBoxContext<T extends object = object> {
	state: ListState<T>;
}

export const ListBoxContext = createContext<ListBoxContext | null>(null);

export const useListBoxContext = () => useContext(ListBoxContext);
