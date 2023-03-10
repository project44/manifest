import { Container, Typography } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function ContainerExample() {
  return (
    <Container maxWidth="small">
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
    </Container>
  );
}

export default withDemoWrapper(ContainerExample);
