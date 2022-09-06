import * as React from 'react';
import { Box } from '@project44-manifest/react';

type ContainerProps = React.ComponentPropsWithoutRef<typeof Box>;

function Container(props: ContainerProps) {
  const { css, ...other } = props;

  return (
    <Box
      css={{ ...css, boxSizing: 'border-box', maxWidth: '$large', mx: 'auto', px: '$large' }}
      {...other}
    />
  );
}

export default Container;
