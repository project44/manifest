import * as React from 'react';
import { Flex, pxToRem } from '@project44-manifest/react';
import { LiveError, LivePreview } from 'react-live';

const Preview: React.FC<React.ComponentPropsWithRef<'div'>> = props => (
  <Flex
    {...props}
    css={{
      backgroundColor: '$background-primary',
      fontFamily: '$text',
      overflow: 'scroll',
      padding: pxToRem(12),
    }}
  >
    <LivePreview />
    <LiveError />
  </Flex>
);

export default Preview;
