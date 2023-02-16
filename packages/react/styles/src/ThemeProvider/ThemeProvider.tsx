import * as React from 'react';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { theme as defaultTheme } from '../stitches';
import { globalStyles } from '../styles';
import { cx } from '../utils';
import { ThemeContextProvider } from './ThemeProvider.context';
import { StyledThemeProvider } from './ThemeProvider.styles';
import type { ThemeProviderElement, ThemeProviderProps } from './ThemeProvider.types';

export const ThemeProvider = React.forwardRef((props, forwardRef) => {
  const {
    as,
    css,
    children,
    className: classNameProp,
    disableCSSBaseline = false,
    theme = defaultTheme,
    ...other
  } = props;

  const context = React.useMemo(() => ({ theme }), [theme]);

  const className = cx('manifest-theme-provider', theme.className, classNameProp);

  React.useEffect(() => {
    if (!disableCSSBaseline) {
      globalStyles();
    }
  }, [disableCSSBaseline]);

  return (
    <ThemeContextProvider value={context}>
      <StyledThemeProvider {...other} ref={forwardRef} className={className} css={css}>
        {children}
      </StyledThemeProvider>
    </ThemeContextProvider>
  );
}) as ForwardRefComponent<ThemeProviderElement, ThemeProviderProps>;
