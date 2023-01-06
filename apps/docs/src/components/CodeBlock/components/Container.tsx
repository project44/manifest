import * as React from 'react';
import { Box, BoxProps } from '@project44-manifest/react';

const Container: React.FC<BoxProps & React.ComponentPropsWithRef<typeof Box>> = ({
  css,
  ...other
}) => (
    <Box
      {...other}
      css={{
        backgroundColor: '$palette-grey-800',
        border: '1px solid $border-primary',
        borderRadius: '$small',
        padding: '$medium',
        overflow: 'hidden',

        pre: {
          backgroundColor: '$palette-grey-800 !important',
        },

        ...css,
      }}
    />
  );

export default Container;
