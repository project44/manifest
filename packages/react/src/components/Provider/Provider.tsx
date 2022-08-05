import * as React from 'react';
import { CssBaseline } from '../CssBaseline';
import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';

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
}

export function Provider(props: ProviderProps) {
  const { children, disableCSSBaseline = false, ...other } = props;

  return (
    <SSRProvider>
      <OverlayProvider {...other}>
        {!disableCSSBaseline && <CssBaseline />}
        {children}
      </OverlayProvider>
    </SSRProvider>
  );
}
