import { Avatar } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function AvatarExample() {
  return <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />;
}

export default withDemoWrapper(AvatarExample);
