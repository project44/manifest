import * as React from 'react';
import { Provider } from '@project44-manifest/react';
import styles from './styles.module.scss';

export const withDemoWrapper = (Component: React.ComponentType) => {
  function DemoWrapper(props: Record<string, unknown>) {
    return (
      <Provider>
        <div className={styles.demo__wrapper}>
          <Component {...props} />
        </div>
      </Provider>
    );
  }

  return DemoWrapper;
};
