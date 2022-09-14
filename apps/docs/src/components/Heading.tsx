import * as React from 'react';
import { pxToRem, Typography, TypographyProps } from '@project44-manifest/react';
import { As } from '@project44-manifest/system';

function Heading<T extends As = 'span'>(props: TypographyProps<T>) {
  const { children, ...other } = props;

  return (
    <Typography css={{ marginBottom: '$small', marginTop: pxToRem(48) }} {...other}>
      {children}
    </Typography>
  );
}

export default Heading;
