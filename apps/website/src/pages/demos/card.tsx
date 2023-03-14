import { Box, Card, CardBody, Typography } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function CardExample() {
  return (
    <Box css={{ maxWidth: 400 }}>
      <Card>
        <CardBody>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardBody>
      </Card>
    </Box>
  );
}

export default withDemoWrapper(CardExample);
