import { createContext } from '../../utils';

export interface MenuGroupContext {
  isGrouped: boolean;
}

export const [MenuGroupProvider, useMenuGroup] = createContext<MenuGroupContext>({
  name: 'MenuGroupContext',
});
