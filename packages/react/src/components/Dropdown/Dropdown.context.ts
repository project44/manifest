import { createContext } from '../../utils';

export interface DropdownContext {
  closeOnSelect?: boolean;
  menuProps: React.HTMLAttributes<HTMLUListElement>;
  menuRef: React.RefObject<HTMLUListElement>;
  onClose?: () => void;
}

export const [DropdownProvider, useDropdownContext] = createContext<DropdownContext>({
  name: 'DropdownContext',
});
