import { render, screen } from '@testing-library/react';
import { Container } from '../../..';

describe('container', () => {
  it('should render correctly', () => {
    render(<Container>Hello World</Container>);

    const container = screen.getByText('Hello World');

    expect(container).toBeVisible();
  });
});
