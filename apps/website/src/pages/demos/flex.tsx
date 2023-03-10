import { Box, Flex } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function FlexExample() {
  return (
    <Flex gap="small">
      <Box css={{ backgroundColor: '$palette-green-500', size: 64 }} />
      <Box css={{ backgroundColor: '$palette-purple-500', size: 64 }} />
      <Box css={{ backgroundColor: '$palette-pink-500', size: 64 }} />
    </Flex>
  );
}

export default withDemoWrapper(FlexExample);
