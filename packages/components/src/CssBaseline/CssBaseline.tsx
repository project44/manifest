import * as React from 'react';
import { globalStyles } from '@project44-manifest/styles';

export const CssBaseline = React.memo<React.PropsWithChildren<unknown>>(props => {
  const { children } = props;

  globalStyles();

  return <>{children}</>;
});
