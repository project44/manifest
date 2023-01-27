import { Avatar } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function AvatarExample() {
  return <Avatar fallback="MD" />;
}

export default withDemoWrapper(AvatarExample);
