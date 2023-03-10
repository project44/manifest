import { Skeleton } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function SkeletonCardExample() {
  return (
    <Skeleton height={334} width="100%">
      <rect height="180" rx="4" ry="4" width="100%" x="0" y="0" />
      <rect height="15" rx="0" ry="0" width="90%" x="0" y="200" />
      <rect height="15" rx="0" ry="0" width="90%" x="0" y="225" />
    </Skeleton>
  );
}

export default withDemoWrapper(SkeletonCardExample);
