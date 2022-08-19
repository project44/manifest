import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Switch } from './Switch';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/react - Switch', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Switch>Switch</Switch>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render and support being checked', async () => {
    const onChange = jest.fn();

    render(<Switch onChange={onChange}>Switch</Switch>);

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox).toBeVisible();
    expect(checkbox.checked).toBeFalsy();
    expect(checkbox).toHaveAttribute('aria-checked', 'false');

    await userEvent.click(checkbox);

    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    expect(checkbox.checked).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(true);

    await userEvent.click(checkbox);

    expect(checkbox).toHaveAttribute('aria-checked', 'false');
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[1][0]).toBe(false);
  });

  it('should support being controlled', async () => {
    const onChange = jest.fn();

    render(
      <Switch onChange={onChange} isSelected>
        Switch
      </Switch>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox.checked).toBeTruthy();

    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should support being checked by deafult', async () => {
    const onChange = jest.fn();

    render(
      <Switch defaultSelected onChange={onChange}>
        Switch
      </Switch>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox.checked).toBeTruthy();

    await userEvent.click(checkbox);

    expect(checkbox.checked).toBeFalsy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should support being disabled', async () => {
    const onChange = jest.fn();

    render(
      <Switch isDisabled onChange={onChange}>
        Switch
      </Switch>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox.checked).toBeFalsy();

    await userEvent.click(checkbox);

    expect(checkbox.checked).toBeFalsy();
    expect(onChange).not.toHaveBeenCalled();
  });
});
