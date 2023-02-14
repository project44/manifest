import type { Theme } from '@project44-manifest/react-styles';
import { createContext } from '@project44-manifest/react-utils';

export interface ProviderContext {
  /**
   * The theme of children rendered within the provider
   */
  theme?: Theme;
}

export const [ProviderContextProvider, useProvider] = createContext<ProviderContext>({
  name: 'ProviderContext',
});
