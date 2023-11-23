import { render, screen } from '@testing-library/react';
import { IconButton } from '../../..';

describe('react-button - IconButton', () => {
  it('should render', () => {
    render(<IconButton>icon</IconButton>);

    const button = screen.getByRole('button');

    expect(button).toBeVisible();
    expect(button).toHaveAttribute('type', 'button');
  });
});
