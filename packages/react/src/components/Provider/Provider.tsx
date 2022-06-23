import * as React from 'react';
import { CssBaseline } from '../CssBaseline';
import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';

export interface ProviderProps {
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

export function Provider(props: ProviderProps) {
  const { children, disableCSSBaseline = false } = props;

  return (
    <SSRProvider>
      <OverlayProvider>
        {!disableCSSBaseline && <CssBaseline />}
        {children}
      </OverlayProvider>
    </SSRProvider>
  );
}
