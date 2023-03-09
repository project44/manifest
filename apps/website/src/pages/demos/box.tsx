import { Box } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function BoxExample() {
  return <Box>Hello World</Box>;
}

export default withDemoWrapper(BoxExample);
