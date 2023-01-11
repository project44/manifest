import { render, screen } from '@testing-library/react';
import { Container } from '../src';

describe('react-layout - Container', () => {
  it('should render correctly', () => {
    render(<Container>Hello World</Container>);

    const container = screen.getByText('Hello World');

    expect(container).toBeVisible();
  });
});
