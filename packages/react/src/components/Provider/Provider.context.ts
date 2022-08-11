import * as React from 'react';

export type ColorMode = 'light' | 'dark';

export interface ProviderContext {
  colorMode?: ColorMode;
}

export const ProviderContext = React.createContext<ProviderContext | null>(null);

export const useProviderContext = () => React.useContext(ProviderContext);
