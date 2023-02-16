import { createContext } from '@project44-manifest/react-utils';
import type { CreateTheme } from '../stitches';

export interface ThemeContext {
  theme: CreateTheme;
}

export const [ThemeContextProvider, useThemeContext] = createContext<ThemeContext>({
  name: 'ThemeContext',
});
