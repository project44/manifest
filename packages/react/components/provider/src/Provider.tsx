import * as React from 'react';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { ModalProvider } from '@react-aria/overlays';
import { ThemeProvider } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import type { ProviderElement, ProviderProps } from './Provider.types';
import { ProviderContent } from './ProviderContent';

export const Provider = React.forwardRef((props, forwardedRef) => {
  const { locale: prevLocale } = useLocale();

  const { children, locale = prevLocale, disableCSSBaseline, theme, style, ...other } = props;

  return (
    <I18nProvider locale={locale}>
      <ModalProvider>
        <ThemeProvider disableCSSBaseline={disableCSSBaseline} theme={theme}>
          <ProviderContent {...other} ref={forwardedRef}>
            {children}
          </ProviderContent>
        </ThemeProvider>
      </ModalProvider>
    </I18nProvider>
  );
}) as ForwardRefComponent<ProviderElement, ProviderProps>;
