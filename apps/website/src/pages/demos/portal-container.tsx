import * as React from 'react';
import { Portal } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function PortalContainerExample() {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div>This text is not within a portal</div>
      <div ref={ref}>Container Ref</div>
      <Portal containerRef={ref}>
        <div>This text is inside a portal!</div>
      </Portal>
    </>
  );
}

export default withDemoWrapper(PortalContainerExample);
