import type { CreateTheme } from '@project44-manifest/react-styles';
import { createContext } from '@project44-manifest/react-utils';

export interface ProviderContext {
  /**
   * The theme of children rendered within the provider
   */
  theme?: CreateTheme;
}

export const [ProviderContextProvider, useProvider] = createContext<ProviderContext>({
  name: 'ProviderContext',
});
