import * as React from 'react';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { ModalProvider } from '@react-aria/overlays';
import { CssBaseline } from '@project44-manifest/react-css-baseline';
import { ThemeProvider } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { ProviderContextProvider, useProvider } from './Provider.context';
import type { ProviderElement, ProviderProps } from './Provider.types';
import { ProviderContent } from './ProviderContent';

export const Provider = React.forwardRef((props, forwardedRef) => {
  const prevContext = useProvider();
  const { locale: prevLocale } = useLocale();

  const {
    children,
    locale = prevContext ? prevLocale : undefined,
    disableCSSBaseline = false,
    style,
    theme = prevContext?.theme,
    ...other
  } = props;

  const context = React.useMemo(() => ({ ...prevContext, theme }), [prevContext, theme]);

  let content = children;

  if (!prevContext || props.locale || theme !== prevContext?.theme) {
    content = (
      <ProviderContent
        {...other}
        ref={forwardedRef}
        style={{ isolation: prevContext ? 'isolate' : undefined, ...style }}
      >
        {children}
      </ProviderContent>
    );
  }

  return (
    <ProviderContextProvider value={context}>
      <ThemeProvider theme={theme}>
        <I18nProvider locale={locale}>
          <ModalProvider>
            {!disableCSSBaseline && <CssBaseline />}
            {content}
          </ModalProvider>
        </I18nProvider>
      </ThemeProvider>
    </ProviderContextProvider>
  );
}) as ForwardRefComponent<ProviderElement, ProviderProps>;
