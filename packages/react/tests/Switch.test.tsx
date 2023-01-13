import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../src';

describe('@project44-manifest/react - Switch', () => {
  it('should render and support being checked', () => {
    const onChange = jest.fn();

    render(<Switch onChange={onChange}>Switch</Switch>);

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox).toBeVisible();
    expect(checkbox.checked).toBeFalsy();
    expect(checkbox).toHaveAttribute('aria-checked', 'false');

    fireEvent.click(checkbox);

    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    expect(checkbox.checked).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(true);

    fireEvent.click(checkbox);

    expect(checkbox).toHaveAttribute('aria-checked', 'false');
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[1][0]).toBe(false);
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(
      <Switch isSelected onChange={onChange}>
        Switch
      </Switch>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox.checked).toBeTruthy();

    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should support being checked by deafult', () => {
    const onChange = jest.fn();

    render(
      <Switch defaultSelected onChange={onChange}>
        Switch
      </Switch>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox.checked).toBeTruthy();

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBeFalsy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should support being disabled', () => {
    const onChange = jest.fn();

    render(
      <Switch isDisabled onChange={onChange}>
        Switch
      </Switch>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('switch');

    expect(checkbox.checked).toBeFalsy();

    void userEvent.click(checkbox);

    expect(checkbox.checked).toBeFalsy();
    expect(onChange).not.toHaveBeenCalled();
  });
});
