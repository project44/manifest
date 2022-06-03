import * as React from 'react';
import { Portal } from './Portal';
import { render } from '@testing-library/react';

describe('@manifest/react - Portal', () => {
  it('should mount a portal', () => {
    const container = render(
      <Portal>
        <span data-testid="child" />
      </Portal>,
    );

    expect(container.getByTestId('child')).toBeVisible();
  });

  it('should render children in a container', () => {
    const container = document.createElement('div');

    document.body.appendChild(container);

    function Component() {
      const ref = React.useRef<HTMLDivElement>(null);

      if (ref.current === null) {
        // @ts-expect-error: reassigning a ref here is fine
        ref.current = container;
      }

      return (
        <Portal containerRef={ref}>
          <span data-testid="child" />
        </Portal>
      );
    }

    const wrapper = render(<Component />);

    expect(container).toContainElement(wrapper.getByTestId('child'));

    document.body.removeChild(container);
  });
});
