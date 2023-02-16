import * as React from 'react';
import { theme as defaultTheme } from '../stitches';
import { globalStyles } from '../styles';
import { ThemeContextProvider } from './ThemeProvider.context';
import { StyledThemeProvider } from './ThemeProvider.styles';
import type { ThemeProviderProps } from './ThemeProvider.types';

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, disableCSSBaseline = false, theme = defaultTheme } = props;

  const context = React.useMemo(() => ({ theme }), [theme]);

  React.useEffect(() => {
    if (!disableCSSBaseline) {
      globalStyles();
    }
  }, [disableCSSBaseline]);

  return (
    <ThemeContextProvider value={context}>
      <StyledThemeProvider className={theme.className}>{children}</StyledThemeProvider>
    </ThemeContextProvider>
  );
}
