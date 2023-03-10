import { Box, Stack } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function StackExample() {
  return (
    <Stack gap="small" orientation="horizontal">
      <Box css={{ backgroundColor: '$palette-green-500', size: 64 }} />
      <Box css={{ backgroundColor: '$palette-purple-500', size: 64 }} />
      <Box css={{ backgroundColor: '$palette-pink-500', size: 64 }} />
    </Stack>
  );
}

export default withDemoWrapper(StackExample);
