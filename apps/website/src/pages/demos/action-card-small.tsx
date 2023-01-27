import {
  ActionCard,
  ActionCardBody,
  ActionCardHeader,
  ActionCardImage,
  Box,
} from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function ActionCardExample() {
  return (
    <Box css={{ maxWidth: 400 }}>
      <ActionCard href="#">
        <ActionCardImage size="small" src="https://picsum.photos/600/400" />
        <ActionCardHeader>Title</ActionCardHeader>
        <ActionCardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </ActionCardBody>
      </ActionCard>
    </Box>
  );
}

export default withDemoWrapper(ActionCardExample);
