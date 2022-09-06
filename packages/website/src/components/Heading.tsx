import * as React from 'react';
import { pxToRem, Typography } from '@project44-manifest/react';

type HeadingProps = React.ComponentPropsWithoutRef<typeof Typography>;

function Heading(props: HeadingProps) {
  const { children, ...other } = props;

  return (
    <Typography as="h2" css={{ marginBottom: '$small', marginTop: pxToRem(48) }} {...other}>
      {children}
    </Typography>
  );
}

export default Heading;
