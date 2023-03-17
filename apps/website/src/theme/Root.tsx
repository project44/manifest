import { Provider, Toaster } from '@project44-manifest/react';
import type { Props } from '@theme/Root';

// Default implementation, that you can customize
export default function Root(props: Props) {
  const { children } = props;

  return (
    <Provider>
      <Toaster />
      {children}
    </Provider>
  );
}
