import * as React from 'react';
import { Theme, theme } from '../stitches';

export interface ThemeContext {
	theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContext>({ theme });

export const useTheme = () => React.useContext(ThemeContext);
