import { render, screen } from '@testing-library/react';
import { Icon } from '../src';

describe('icon', () => {
  it('should render correctly', () => {
    render(
      <Icon aria-label="icon">
        <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
      </Icon>,
    );

    const svg = screen.getByRole('img');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('focusable', 'false');
    expect(svg).toHaveAttribute('aria-label', 'icon');
  });

  it('should be hidden from screen readers when without a label', () => {
    render(
      <Icon>
        <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
      </Icon>,
    );

    const svg = screen.getByRole('img', { hidden: true });

    expect(svg).toBeInTheDocument();
    expect(svg).not.toHaveAttribute('aria-label');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('should support being hidden manually', () => {
    render(
      <Icon aria-hidden aria-label="icon">
        <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
      </Icon>,
    );

    const svg = screen.getByRole('img', { hidden: true });

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-label', 'icon');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});
