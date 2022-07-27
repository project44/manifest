import * as React from 'react';

export interface DropdownContext {
  closeOnSelect?: boolean;
  menuProps: React.HTMLAttributes<HTMLUListElement>;
  menuRef: React.RefObject<HTMLUListElement>;
}

export const DropdownContext = React.createContext<DropdownContext | null>(null);

export const useDropdownContext = () => React.useContext(DropdownContext);
