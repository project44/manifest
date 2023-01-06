import * as React from 'react';
import { Typography, TypographyProps } from '@project44-manifest/react';
import { As } from '@project44-manifest/system';

function Heading<T extends As = 'span'>(properties: TypographyProps<T>) {
  const { children, ...other } = properties;

  return (
    <Typography css={{ marginBottom: '$small' }} {...other}>
      {children}
    </Typography>
  );
}

export default Heading;
