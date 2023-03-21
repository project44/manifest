import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Portal } from '../src/components/Portal';

function Component({ container }: { container: HTMLElement }) {
  const ref = React.useRef<HTMLElement>(null);

  if (ref.current === null) {
    // @ts-expect-error: this is ok.
    ref.current = container;
  }

  return (
    <Portal containerRef={ref}>
      <span data-testid="child" />
    </Portal>
  );
}

it('should render', () => {
  render(
    <Portal>
      <span data-testid="child" />
    </Portal>,
  );

  expect(screen.getByTestId('child')).toBeVisible();
});

it('should render children in a container', () => {
  const container = document.createElement('div');

  document.body.appendChild(container);

  render(<Component container={container} />);

  expect(container).toContainElement(screen.getByTestId('child'));

  document.body.removeChild(container);
});
