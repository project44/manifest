import { memo } from 'react';
import { useStyles } from './CssBaseline.styles';

export const CssBaseline = memo<React.PropsWithChildren<unknown>>((props) => {
  const { children } = props;

  useStyles();

  return <>{children}</>;
});
