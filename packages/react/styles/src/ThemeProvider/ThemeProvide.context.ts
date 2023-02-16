import { createContext } from '@project44-manifest/react-utils';
import type { StitchesTheme } from '../stitches';
import type { ThemeType } from '../types';

export interface ThemeContext {
  theme?: StitchesTheme;
  type?: ThemeType;
}

export const [ThemeContextProvider, useTheme] = createContext<ThemeContext>({
  name: 'ThemeContext',
});
