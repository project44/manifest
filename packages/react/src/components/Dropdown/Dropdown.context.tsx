import * as React from 'react';
import { useDropdown } from './useDropdown';

export type DropdownContext = ReturnType<typeof useDropdown>;

export const DropdownContext = React.createContext<DropdownContext | null>(null);

export const useDropdownContext = () => React.useContext(DropdownContext);
