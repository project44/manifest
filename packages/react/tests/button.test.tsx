import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../src';

const mockProps = {
  'aria-label': 'Mock aria',
  children: 'Click me',
  onPress: jest.fn(),
}

describe('react-button - Button', () => {
  beforeEach(jest.resetAllMocks)

  it('should render', () => {
    render(<Button {...mockProps} />);

    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render icons', () => {
    render(
      <Button
        {...mockProps}
        endIcon={<span data-testid="end" />}
        startIcon={<span data-testid="start" />}
      />,
    );

    expect(screen.getByTestId('end')).toBeVisible();
    expect(screen.getByTestId('start')).toBeVisible();
  });

  it('should handle press events', () => {
    render(<Button {...mockProps} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockProps.onPress).toHaveBeenCalled();
  });

  it('should handle disabled button', () => {
    render(<Button {...mockProps} isDisabled />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockProps.onPress).not.toHaveBeenCalled();
  });
});
