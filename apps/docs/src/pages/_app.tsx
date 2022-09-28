import type { AppProps } from 'next/app';
import * as React from 'react';
import { Provider } from '@project44-manifest/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
