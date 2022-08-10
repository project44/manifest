import type { DOMRef } from '@react-types/shared';
import * as React from 'react';
import { CssBaseline } from '../CssBaseline';
import { cx } from '../../styles';
import { filterDOMProps } from '@react-aria/utils';
import { useDOMRef } from '@react-spectrum/utils';
import { useLocale } from '@react-aria/i18n';
import { useModalProvider } from '@react-aria/overlays';

interface ProviderWrapperProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Content to be wrapped by the provider.
   */
  children: React.ReactNode;
  /**
   * Whether to disable the baseline css.
   *
   * @default false;
   */
  disableCSSBaseline?: boolean;
}

/**
 * @internal
 */
const ProviderWrapper = React.forwardRef(
  (props: ProviderWrapperProps, forwardedRef: DOMRef<HTMLDivElement>) => {
    const {
      children,
      className: classNameProp,
      disableCSSBaseline = false,
      style,
      ...other
    } = props;

    const domRef = useDOMRef(forwardedRef);

    const { locale, direction } = useLocale();
    const { modalProviderProps } = useModalProvider();

    return (
      <div
        {...filterDOMProps(other)}
        {...modalProviderProps}
        className={cx(classNameProp, 'manifest-provider')}
        dir={direction}
        lang={locale}
        ref={domRef}
        style={style}
      >
        {!disableCSSBaseline && <CssBaseline />}
        {children}
      </div>
    );
  },
);

export type { ProviderWrapperProps };
export { ProviderWrapper };
