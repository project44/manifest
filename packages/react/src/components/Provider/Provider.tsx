import * as React from 'react';
import { CssBaseline } from '../CssBaseline';
import { I18nProvider } from '@react-aria/i18n';
import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';

interface ProviderProps extends React.HTMLAttributes<HTMLElement> {
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
  /**
   * The locale for your application as a [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code.
   * Defaults to the browser/OS language setting.
   *
   * @default 'en-US'
   */
  locale?: string;
}

function Provider(props: ProviderProps) {
  const { children, disableCSSBaseline = false, locale, ...other } = props;

  return (
    <SSRProvider>
      <I18nProvider locale={locale}>
        <OverlayProvider {...other}>
          {!disableCSSBaseline && <CssBaseline />}
          {children}
        </OverlayProvider>
      </I18nProvider>
    </SSRProvider>
  );
}

export type { ProviderProps };
export { Provider };
