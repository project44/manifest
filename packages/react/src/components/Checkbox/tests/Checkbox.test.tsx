import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../../..';

describe('@project44-manifest/react - Checkbox', () => {
  it('should render and support being checked', () => {
    const onChange = jest.fn();

    render(<Checkbox onChange={onChange}>Checkbox</Checkbox>);

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox).toBeVisible();
    expect(checkbox.checked).toBeFalsy();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(checkbox.checked).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(true);

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[1][0]).toBe(false);
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(
      <Checkbox isSelected onChange={onChange}>
        Checkbox
      </Checkbox>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox.checked).toBeTruthy();

    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should support being checked by deafult', () => {
    const onChange = jest.fn();

    render(
      <Checkbox defaultSelected onChange={onChange}>
        Checkbox
      </Checkbox>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox.checked).toBeTruthy();

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBeFalsy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should support being disabled', () => {
    const onChange = jest.fn();

    render(
      <Checkbox isDisabled onChange={onChange}>
        Checkbox
      </Checkbox>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    void userEvent.click(checkbox);

    expect(checkbox.checked).toBeFalsy();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should support being invalid', () => {
    render(<Checkbox validationState="invalid">Checkbox</Checkbox>);

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('should support being indeterminate', () => {
    const onChange = jest.fn();

    render(
      <Checkbox isIndeterminate onChange={onChange}>
        Checkbox
      </Checkbox>,
    );

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    expect(checkbox.indeterminate).toBeTruthy();
    expect(checkbox.checked).toBeFalsy();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(checkbox.indeterminate).toBeTruthy();
    expect(checkbox.checked).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(true);

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(checkbox.indeterminate).toBeTruthy();
    expect(checkbox.checked).toBeFalsy();
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[1][0]).toBe(false);
  });
});
