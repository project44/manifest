import { Link, Typography } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function LinkExample() {
  return (
    <Typography>
      Visit the manifest design system <Link href="https://manifestdesignsystem.com">website</Link>
    </Typography>
  );
}

export default withDemoWrapper(LinkExample);
