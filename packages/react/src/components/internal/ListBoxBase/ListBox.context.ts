import type { ListState } from '@react-stately/list';
import * as React from 'react';

export interface ListBoxContext<T extends object = object> {
  state: ListState<T>;
}

export const ListBoxContext = React.createContext<ListBoxContext | null>(null);

export const useListBoxContext = () => React.useContext(ListBoxContext);
