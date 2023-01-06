import * as React from 'react';
import NextImage, { ImageProps } from 'next/image';
import { Box } from '@project44-manifest/react';

const Image: React.FC<ImageProps> = (properties) => (
  <Box
    css={{
      backgroundColor: '$background-secondary',
      borderRadius: '$small',
      marginBottom: '$x-large',
    }}
  >
    <NextImage height={400} layout="responsive" objectFit="contain" width={700} {...properties} />
  </Box>
);

export default Image;
