import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Input } from '../Input';
import { Icon } from '../../Icon';
import userEvent from '@testing-library/user-event';

describe('@manifest/react - Input', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Input placeholder="Default" />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render and allow a user to input a value', async () => {
    const onChange = jest.fn();

    render(
      <Input
        endIcon={<Icon data-testid="end" />}
        onChange={onChange}
        value="foo"
        startIcon={<Icon data-testid="start" />}
      />,
    );

    const endIcon = screen.getByTestId('end');
    const input = screen.getByDisplayValue('foo');
    const startIcon = screen.getByTestId('start');

    expect(endIcon).toBeVisible();
    expect(input).toBeVisible();
    expect(startIcon).toBeVisible();

    const newValue = 'bar!';

    await userEvent.type(input, newValue);

    expect(onChange).toHaveBeenCalledTimes(newValue.length);
  });
});
