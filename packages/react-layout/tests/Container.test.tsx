import { render, screen } from '@project44-manifest/react-test-utils';
import { Container } from '../src';

describe('react-layout - Container', () => {
  it('should render correctly', () => {
    render(<Container>Hello World</Container>);

    const container = screen.getByText('Hello World');

    expect(container).toBeVisible();
  });
});
