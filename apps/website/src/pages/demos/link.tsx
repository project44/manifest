import { Link } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function LinkExample() {
  return <Link href="https://manifestdesignsystem.com">Manifest Design System</Link>;
}

export default withDemoWrapper(LinkExample);
