import * as React from 'react';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { ModalProvider, useModalProvider } from '@react-aria/overlays';
import { CssBaseline } from '@project44-manifest/react-css-baseline';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { ProviderContextProvider, useProvider } from './Provider.context';
import { StyledProvider } from './Provider.styles';
import type { ProviderElement, ProviderProps } from './Provider.types';

const ProviderImpl = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, theme, ...other } = props;

  const { locale, direction } = useLocale();
  const { modalProviderProps } = useModalProvider();

  const classnames = cx('manifest-provider', theme?.className, classNameProp);

  return (
    <StyledProvider
      {...other}
      {...modalProviderProps}
      ref={forwardedRef}
      as={as}
      className={classnames}
      css={css}
      dir={direction}
      lang={locale}
    >
      {children}
    </StyledProvider>
  );
}) as ForwardRefComponent<ProviderElement, ProviderProps>;

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
      <ProviderImpl
        {...other}
        ref={forwardedRef}
        style={{ isolation: !prevContext ? 'isolate' : undefined, ...style }}
        theme={theme}
      >
        {children}
      </ProviderImpl>
    );
  }

  return (
    <ProviderContextProvider value={context}>
      <I18nProvider locale={locale}>
        <ModalProvider>
          {!disableCSSBaseline && <CssBaseline />}
          {children}
        </ModalProvider>
      </I18nProvider>
    </ProviderContextProvider>
  );
}) as ForwardRefComponent<ProviderElement, ProviderProps>;
