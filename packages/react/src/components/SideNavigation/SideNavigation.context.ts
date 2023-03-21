import { createContext } from '../../utils';

export interface NavigationContext {
  isHovered: boolean;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const [NavigationProvider, useNavigation] = createContext<NavigationContext>({
  name: 'NavigationContext',
});
