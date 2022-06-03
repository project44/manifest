import * as React from 'react';
import { CssBaseline } from '../CssBaseline';

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
    <>
      {!disableCSSBaseline && <CssBaseline />}
      {children}
    </>
  );
}
