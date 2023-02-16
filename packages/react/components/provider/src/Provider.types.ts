import type { CreateTheme } from '@project44-manifest/react-styles';
import type { ProviderContentElement, ProviderContentProps } from './ProviderContent';

export type ProviderElement = ProviderContentElement;

export interface ProviderProps extends ProviderContentProps {
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
  /**
   * The theme of children rendered within the provider
   */
  theme?: CreateTheme;
}
