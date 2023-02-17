import type { CreateTheme, CSS } from '@project44-manifest/react-styles';

export type ProviderContentElement = 'div';

export interface ProviderContentProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * The theme of children rendered within the provider
   */
  theme?: CreateTheme;
}
