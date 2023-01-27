import { createContext } from '@project44-manifest/react-utils';

export interface NavigationContext {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const [NavigationProvider, useNavigation] = createContext<NavigationContext>({
  name: 'NavigationContext',
});
