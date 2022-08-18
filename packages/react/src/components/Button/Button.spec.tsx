import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Button } from './Button';

describe('@project44-manifest/react - Button', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeVisible();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render icons', () => {
    render(
      <Button endIcon={<span data-testId="end" />} startIcon={<span data-testId="start" />}>
        Click Me
      </Button>,
    );

    expect(screen.getByTestId('end')).toBeVisible();
    expect(screen.getByTestId('start')).toBeVisible();
  });

  it('should handle click events', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Click Me</Button>);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should handle press events', () => {
    const onPress = jest.fn();

    render(<Button onPress={onPress}>Click Me</Button>);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onPress).toHaveBeenCalled();
  });

  it('should handle disabled button', () => {
    const clickSpy = jest.fn();

    render(
      <Button isDisabled onClick={clickSpy}>
        Click Me
      </Button>,
    );

    const button = screen.getByText('Click Me');

    fireEvent.click(button);

    expect(clickSpy).not.toHaveBeenCalled();
  });
});
