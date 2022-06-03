import * as React from 'react';
import { axe } from 'jest-axe';
import { Input } from './Input';
import { Icon } from '../Icon';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('@manifest/react - Input', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Input placeholder="Default" />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render and allow a user to input a value', async () => {
    const onChangeSpy = jest.fn();

    const container = render(
      <Input
        endIcon={<Icon data-testid="end" />}
        onChange={onChangeSpy}
        value="foo"
        startIcon={<Icon data-testid="start" />}
      />,
    );

    const endIcon = container.getByTestId('end');
    const input = container.getByDisplayValue('foo');
    const startIcon = container.getByTestId('start');

    // Check rendered values
    expect(endIcon).toBeTruthy();
    expect(input).toBeTruthy();
    expect(startIcon).toBeTruthy();

    // Check change
    const newValue = 'bar!';

    await userEvent.type(input, newValue);

    expect(onChangeSpy).toHaveBeenCalledTimes(newValue.length);
  });

  it('should render disabled state and not allow input', async () => {
    const onChangeSpy = jest.fn();

    const container = render(<Input disabled onChange={onChangeSpy} value="foo" />);

    const input = container.getByDisplayValue('foo');

    // Check change
    const newValue = 'bar!';

    await userEvent.type(input, newValue);

    expect(onChangeSpy).not.toHaveBeenCalled();

    expect(input).toHaveAttribute('disabled');
  });
});
