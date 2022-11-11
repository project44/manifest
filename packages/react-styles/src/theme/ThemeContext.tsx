import * as React from 'react';
import type { Theme } from '../stitches';
import { theme } from '../stitches';

export interface ThemeContext {
	theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContext>({ theme });

export const useTheme = () => React.useContext(ThemeContext);
