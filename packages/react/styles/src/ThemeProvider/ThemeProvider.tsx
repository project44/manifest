import * as React from 'react';
import { CssBaseline } from '@project44-manifest/react-css-baseline';
import { theme as defaultTheme } from '../stitches';
import { ThemeContextProvider } from './ThemeProvide.context';
import { StyledThemeProvider } from './ThemeProvider.styles';
import type { ThemeProviderProps } from './ThemeProvider.types';

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, disableCSSBaseline = false, theme = defaultTheme } = props;

  const context = React.useMemo(() => ({ theme }), [theme]);

  return (
    <ThemeContextProvider value={context}>
      <StyledThemeProvider className={theme.className}>
        {!disableCSSBaseline && <CssBaseline />}
        {children}
      </StyledThemeProvider>
    </ThemeContextProvider>
  );
}
