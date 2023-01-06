import * as React from 'react';
import { LiveError, LivePreview } from 'react-live';
import { Flex, pxToRem, styled } from '@project44-manifest/react';

const StyledPreview = styled(LivePreview, {
  fontFamily: '$text',
  width: '100%',
});

const Preview: React.FC<React.ComponentPropsWithRef<'div'>> = (properties) => (
  <Flex
    {...properties}
    css={{
      backgroundColor: '$background-primary',
      fontFamily: '$text',
      overflow: 'scroll',
      padding: pxToRem(12),
    }}
  >
    <StyledPreview />
    <LiveError />
  </Flex>
);

export default Preview;
