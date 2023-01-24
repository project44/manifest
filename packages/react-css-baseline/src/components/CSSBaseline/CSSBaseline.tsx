import * as React from 'react';
import { useStyles } from './CSSBaseline.styles';

export const CssBaseline = React.memo<React.PropsWithChildren<unknown>>((props) => {
  const { children } = props;

  useStyles();

  // We don't wish to add any markup here, a fragment is not useless in this case.
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
});
