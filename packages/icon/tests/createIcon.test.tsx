import { render, screen } from '@testing-library/react';
import { createIcon } from '../src';

describe('createIcon', () => {
  it('should create an icon from a path', () => {
    const Icon = createIcon(
      <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />,
    );

    render(<Icon aria-label="icon" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
