import * as React from 'react';
import { Provider } from '@project44-manifest/react';

export const withDemoWrapper = (Component: React.ComponentType) => {
  function DemoWrapper(props: Record<string, unknown>) {
    return (
      <Provider>
        <div className="demo-wrapper">
          <Component {...props} />
        </div>
      </Provider>
    );
  }

  return DemoWrapper;
};
