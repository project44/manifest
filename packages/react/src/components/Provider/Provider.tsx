import * as React from 'react';
import { ColorMode, ProviderContext, useProviderContext } from './Provider.context';
import { filterDOMProps, mergeRefs } from '@react-aria/utils';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { ModalProvider, useModalProvider } from '@react-aria/overlays';
import { CssBaseline } from '../CssBaseline';
import { cx } from '../../styles';
import { SSRProvider } from '@react-aria/ssr';

type ProviderElement = React.ElementRef<'div'>;

interface ProviderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Content to be wrapped by the provider.
   */
  children: React.ReactNode;
  /**
   * The color mode of the content within the provider.
   */
  colorMode?: ColorMode;
  /**
   * Whether to disable the baseline css.
   *
   * @default false
   */
  disableCSSBaseline?: boolean;
  /**
   * The locale for your application as a [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code.
   * Defaults to the browser/OS language setting.
   *
   * @default 'en-US'
   */
  locale?: string;
}

const Provider = React.forwardRef<ProviderElement, ProviderProps>((props, forwardedRef) => {
  const outerContext = useProviderContext();
  const { locale: outerLocale } = useLocale();

  const {
    children: childrenProp,
    colorMode,
    disableCSSBaseline,
    locale = outerContext ? outerLocale : undefined,
    ...other
  } = props;

  const domProps = filterDOMProps(other);
  const trulyDisableCSSBaseline = outerContext ?? disableCSSBaseline;

  let children = childrenProp;

  if (
    !outerContext ||
    props.locale ||
    Object.keys(domProps).length > 0 ||
    colorMode !== outerContext.colorMode ||
    other.className ||
    other.style
  ) {
    children = (
      <_Provider
        {...props}
        style={{ isolation: !outerContext ? 'isolate' : undefined, ...(other.style ?? {}) }}
        ref={forwardedRef}
      >
        {children}
      </_Provider>
    );
  }

  return (
    <ProviderContext.Provider value={{ colorMode }}>
      <SSRProvider>
        <I18nProvider locale={locale}>
          <ModalProvider {...other}>
            {!trulyDisableCSSBaseline && <CssBaseline />}
            {children}
          </ModalProvider>
        </I18nProvider>
      </SSRProvider>
    </ProviderContext.Provider>
  );
});

/**
 * @internal
 */
const _Provider = React.forwardRef<ProviderElement, ProviderProps>((props, forwardedRef) => {
  const { children, className: classNameProp, style, ...other } = props;

  const providerRef = React.useRef<HTMLDivElement>(null);

  const { locale, direction } = useLocale();
  const { modalProviderProps } = useModalProvider();

  return (
    <div
      {...filterDOMProps(other)}
      {...modalProviderProps}
      className={cx(classNameProp, 'manifest-provider')}
      dir={direction}
      lang={locale}
      ref={mergeRefs(providerRef, forwardedRef)}
      style={style}
    >
      {children}
    </div>
  );
});

export type { ProviderProps };
export { Provider };
