import * as React from 'react';
import { useLocale } from '@react-aria/i18n';
import { useModalProvider } from '@react-aria/overlays';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useProvider } from '../Provider.context';
import type { ProviderContentElement } from './ProviderContent.types';

/**
 * Wrapper for the children within a provider, sets the user language and direction of the content.
 *
 * @private
 */
export const ProviderContent = React.forwardRef((props, forwardedRef) => {
  const { as: Comp = 'div', children, className: classNameProp, ...other } = props;

  const { theme } = useProvider();
  const { locale, direction } = useLocale();
  const { modalProviderProps } = useModalProvider();

  const classnames = cx('manifest-provider', theme?.className, classNameProp);

  return (
    <Comp
      {...other}
      {...modalProviderProps}
      ref={forwardedRef}
      className={classnames}
      dir={direction}
      lang={locale}
    >
      {children}
    </Comp>
  );
}) as ForwardRefComponent<ProviderContentElement, {}>;
