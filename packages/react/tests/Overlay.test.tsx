import { render, screen } from '@testing-library/react';
import { Overlay } from '../src';

describe('@project44-manifest/react - Overlay', () => {
  it('should render nothing if isOpen is false', () => {
    render(
      <Overlay>
        <span data-testid="overlay">Overlay</span>
      </Overlay>,
    );

    expect(screen.queryByTestId('overlay')).toBeNull();
  });

  it('should render if isOpen is true', () => {
    render(
      <Overlay isOpen>
        <span data-testid="overlay">Overlay</span>
      </Overlay>,
    );

    expect(screen.getByTestId('overlay')).not.toBeNull();
  });
});
