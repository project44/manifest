import * as React from 'react';
import { Theme, theme as defaultTheme } from '../stitches';
import { ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
	children: React.ReactNode;
	theme?: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
	const { children, theme = defaultTheme } = props;

	const context = React.useMemo(() => ({ theme }), [theme]);

	return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
}
