import * as React from 'react';
import { Portal } from '../../..';

export default {
  title: 'Components/Portal',
  component: Portal,
};

export const Default = () => (
  <Portal>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </Portal>
);

export const ContainerRef = () => {
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
};
