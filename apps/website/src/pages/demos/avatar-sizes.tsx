import { Avatar, Flex } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function AvatarExample() {
  return (
    <Flex align="center" gap="medium">
      <Avatar
        size="medium"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />
      <Avatar size="small" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
    </Flex>
  );
}

export default withDemoWrapper(AvatarExample);
