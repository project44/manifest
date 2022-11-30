import { render, screen } from '@project44-manifest/react-test-utils';
import { Box } from '../src';

describe('react-layout - Box', () => {
  it('should render correctly', () => {
    render(<Box>Hello World</Box>);

    const box = screen.getByText('Hello World');

    expect(box).toBeVisible();
  });
});
