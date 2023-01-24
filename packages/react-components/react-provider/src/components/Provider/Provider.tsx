import * as React from 'react';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { ModalProvider } from '@react-aria/overlays';
import { CssBaseline } from '@project44-manifest/react-css-baseline';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { ProviderWrapper, ProviderWrapperElement } from '../ProviderWrapper';
import type { ProviderProps } from './Provider.types';

export const Provider = React.forwardRef((props, forwardedRef) => {
  const { locale: prevLocale } = useLocale();

  const { children, locale = prevLocale, disableCSSBaseline = false, ...other } = props;

  return (
    <I18nProvider locale={locale}>
      <ModalProvider>
        {!disableCSSBaseline && <CssBaseline />}
        <ProviderWrapper {...other} ref={forwardedRef}>
          {children}
        </ProviderWrapper>
      </ModalProvider>
    </I18nProvider>
  );
}) as ForwardRefComponent<ProviderWrapperElement, ProviderProps>;
