import * as React from 'react';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { ModalProvider } from '@react-aria/overlays';
import { globalStyles } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { ProviderContextProvider, useProvider } from './Provider.context';
import type { ProviderElement, ProviderProps } from './Provider.types';
import { ProviderContent } from './ProviderContent';

export const Provider = React.forwardRef((props, forwardedRef) => {
  const prevContext = useProvider();
  const { locale: prevLocale } = useLocale();

  const {
    children: childrenProp,
    locale = prevLocale,
    disableCSSBaseline,
    theme = prevContext?.theme,
    style,
    ...other
  } = props;

  const context = React.useMemo(() => ({ theme }), [theme]);

  let children = childrenProp;

  if (!prevContext || props.locale || theme !== prevContext.theme) {
    children = (
      <ProviderContent
        {...other}
        ref={forwardedRef}
        style={{ isolation: !prevContext ? 'isolate' : undefined, ...style }}
        theme={theme}
      >
        {children}
      </ProviderContent>
    );
  }

  React.useEffect(() => {
    if (!prevContext && !disableCSSBaseline) {
      globalStyles();
    }
  }, [prevContext, disableCSSBaseline]);

  return (
    <ProviderContextProvider value={context}>
      <I18nProvider locale={locale}>
        <ModalProvider>{children}</ModalProvider>
      </I18nProvider>
    </ProviderContextProvider>
  );
}) as ForwardRefComponent<ProviderElement, ProviderProps>;
