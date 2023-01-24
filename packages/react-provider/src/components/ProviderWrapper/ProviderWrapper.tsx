import * as React from 'react';
import { useLocale } from '@react-aria/i18n';
import { useModalProvider } from '@react-aria/overlays';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledProvider } from './ProviderWrapper.styles';
import type { ProviderWrapperElement, ProviderWrapperProps } from './ProviderWrapper.types';

export const ProviderWrapper = React.forwardRef((props, forwardedRef) => {
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
}) as ForwardRefComponent<ProviderWrapperElement, ProviderWrapperProps>;
