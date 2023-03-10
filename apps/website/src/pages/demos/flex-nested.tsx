import { Box, Flex } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function FlexExample() {
  return (
    <Flex css={{ width: '100%' }} gap="small" orientation="vertical">
      <Box css={{ backgroundColor: '$palette-green-500', height: 64 }} />
      <Flex css={{ height: 200 }} gap="small">
        <Box css={{ backgroundColor: '$palette-blue-500', width: 120 }} />
        <Box css={{ backgroundColor: '$palette-purple-500', flex: 1 }} />
      </Flex>
      <Box css={{ backgroundColor: '$palette-pink-500', height: 64 }} />
    </Flex>
  );
}

export default withDemoWrapper(FlexExample);
