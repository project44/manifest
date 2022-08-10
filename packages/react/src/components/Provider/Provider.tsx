import * as React from 'react';
import { I18nProvider } from '@react-aria/i18n';
import { ModalProvider } from '@react-aria/overlays';
import { ProviderWrapper } from '../ProviderWrapper';

export interface ProviderProps extends React.HTMLAttributes<HTMLElement> {
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

export function Provider(props: ProviderProps) {
  const { locale, ...other } = props;

  return (
    <I18nProvider locale={locale}>
      <ModalProvider>
        <ProviderWrapper {...other} style={{ isolation: 'isolate', ...other.style }} />
      </ModalProvider>
    </I18nProvider>
  );
}
