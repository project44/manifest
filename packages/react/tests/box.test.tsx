import { render, screen } from '@testing-library/react';
import { Box } from '../src';

describe('box', () => {
  it('should render correctly', () => {
    render(<Box>Hello World</Box>);

    const box = screen.getByText('Hello World');

    expect(box).toBeVisible();
  });
});
