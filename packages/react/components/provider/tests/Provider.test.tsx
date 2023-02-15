import { render, screen } from '@testing-library/react';
import { Provider } from '../src';

describe('react-provider', () => {
  it('should render', () => {
    render(<Provider>test</Provider>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should render pass props to wrapper', () => {
    render(<Provider data-testid="test">test</Provider>);

    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});
