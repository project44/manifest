import { fireEvent, render, screen } from '@testing-library/react';
import { Avatar } from '../src';

describe('react-avatar', () => {
  it('should render an image if a source is provided', () => {
    render(<Avatar src="http://localhost/some_image.png" />);

    fireEvent.load(screen.getByRole('img'));

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'http://localhost/some_image.png');
  });

  it('should render a fallback if no source is provided', () => {
    render(<Avatar fallback="MD" />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByText('MD')).toBeInTheDocument();
  });

  it('should render a fallback if source returns an error', () => {
    render(<Avatar fallback="MD" src="http://localhost/some_image.png" />);

    fireEvent.error(screen.getByRole('img'));

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByText('MD')).toBeInTheDocument();
  });
});
