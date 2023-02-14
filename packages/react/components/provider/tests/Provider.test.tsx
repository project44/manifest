import { render, screen } from '@testing-library/react';
import { Provider } from '../src';

it('should render', () => {
  render(<Provider data-testid="test">test</Provider>);

  expect(screen.getByTestId('test')).toBeInTheDocument();
});
