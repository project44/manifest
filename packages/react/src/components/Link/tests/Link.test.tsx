import { render, screen } from '@testing-library/react';
import { Link } from '../../..';

describe('link', () => {
  it('should render', () => {
    render(<Link href="#test">test</Link>);

    expect(screen.getByText('test')).toBeDefined();

    const link = screen.getByRole('link');

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '#test');
  });
});
