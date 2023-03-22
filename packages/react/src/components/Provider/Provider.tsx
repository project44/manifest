import * as React from 'react';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { ModalProvider, useModalProvider } from '@react-aria/overlays';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledProvider } from './Provider.styles';
import type { ProviderElement, ProviderProps } from './Provider.types';

const ProviderImpl = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const { locale, direction } = useLocale();
  const { modalProviderProps } = useModalProvider();

  const classnames = cx('manifest-provider', classNameProp);

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
  const { locale: prevLocale } = useLocale();

  const { children, locale = prevLocale, style, ...other } = props;

  return (
    <I18nProvider locale={locale}>
      <ModalProvider>
        <ProviderImpl {...other} ref={forwardedRef}>
          {children}
        </ProviderImpl>
      </ModalProvider>
    </I18nProvider>
  );
}) as ForwardRefComponent<ProviderElement, ProviderProps>;
