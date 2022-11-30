import { render, screen } from '@project44-manifest/react-test-utils';
import { Stack } from '../src';

describe('react-layout - Stack', () => {
  it('should render correctly', () => {
    render(<Stack>Hello World</Stack>);

    const stack = screen.getByText('Hello World');

    expect(stack).toBeVisible();
  });
});
