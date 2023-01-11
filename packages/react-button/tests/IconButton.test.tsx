import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import { IconButton } from '../src';

describe('react-button - IconButton', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<IconButton>icon</IconButton>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render', () => {
    render(<IconButton>icon</IconButton>);

    const button = screen.getByRole('button');

    expect(button).toBeVisible();
    expect(button).toHaveAttribute('type', 'button');
  });
});
