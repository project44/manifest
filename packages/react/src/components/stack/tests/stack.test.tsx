import { render, screen } from '@testing-library/react';
import { Stack } from '../../..';

describe('stack', () => {
  it('should render correctly', () => {
    render(<Stack>Hello World</Stack>);

    const stack = screen.getByText('Hello World');

    expect(stack).toBeVisible();
  });
});
