import { render, screen } from '@testing-library/react';
import { Provider } from '../../..';

it('should render', () => {
  render(<Provider>test</Provider>);

  expect(screen.getByText('test')).toBeInTheDocument();
});
