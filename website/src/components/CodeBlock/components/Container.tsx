import * as React from 'react';
import { Box, BoxProps } from '@project44-manifest/react';

const Container: React.FC<BoxProps & React.ComponentPropsWithRef<typeof Box>> = ({
  css,
  ...other
}) => {
  return (
    <Box
      {...other}
      css={{
        backgroundColor: '$background-secondary',
        border: '1px solid $border-primary',
        borderRadius: '$small',
        padding: '$medium',
        my: '$large',
        overflow: 'hidden',

        pre: {
          backgroundColor: '$background-secondary !important',
        },

        ...css,
      }}
    />
  );
};

export default Container;
