import * as React from 'react';
import { useLocale } from '@react-aria/i18n';
import { useModalProvider } from '@react-aria/overlays';
import { StyledProvider } from './styles';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import type { ProviderElement, ProviderProps } from './types';

/**
 * Wrapper for the children within a provider, sets the user language and direction of the content.
 *
 * @private
 */
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
}) as ForwardRefComponent<ProviderElement, ProviderProps>;
