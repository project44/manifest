import { createContext } from '@project44-manifest/react-utils';

export interface MenuGroupContext {
  isGrouped: boolean;
}

export const [MenuGroupProvider, useMenuGroup] = createContext<MenuGroupContext>({
  name: 'MenuGroupContext',
});
