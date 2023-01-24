import type { CSS } from '@project44-manifest/react-styles';

export type ProviderWrapperElement = 'div';

export interface ProviderWrapperProps {
  /**
   * Content to be wrapped by the provider.
   */
  children: React.ReactNode;
  /**
   * Theme aware style object
   */
  css?: CSS;
}
