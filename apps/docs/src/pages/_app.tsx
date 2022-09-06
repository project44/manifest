import type { AppProps } from 'next/app';
import * as React from 'react';
import AppFrame from '../layouts/AppFrame';
import { Provider } from '@project44-manifest/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <AppFrame>
        <Component {...pageProps} />
      </AppFrame>
    </Provider>
  );
}

export default MyApp;
