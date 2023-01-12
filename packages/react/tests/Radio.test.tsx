import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio, RadioGroup } from '../src';

describe('@project44-manifest/react - Radio', () => {
  it('should render and support selection', () => {
    const onChange = jest.fn();

    render(
      <RadioGroup label="Test" onChange={onChange}>
        <Radio value="cats">Cats</Radio>
        <Radio value="dogs">Dogs</Radio>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radios: HTMLInputElement[] = screen.getAllByRole('radio');

    expect(radioGroup).toBeVisible();
    expect(radios).toHaveLength(2);

    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(false);

    fireEvent.click(screen.getByLabelText('Cats'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('cats');

    expect(radios[0].checked).toBe(true);
    expect(radios[1].checked).toBe(false);
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(
      <RadioGroup label="Test" value="dogs" onChange={onChange}>
        <Radio value="cats">Cats</Radio>
        <Radio value="dogs">Dogs</Radio>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radios: HTMLInputElement[] = screen.getAllByRole('radio');

    expect(radioGroup).toBeVisible();
    expect(radios).toHaveLength(2);

    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(true);

    fireEvent.click(screen.getByLabelText('Cats'));

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith('cats');

    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(true);
  });

  it('should support a default value', () => {
    const onChange = jest.fn();

    render(
      <RadioGroup defaultValue="dogs" label="Test" onChange={onChange}>
        <Radio value="cats">Cats</Radio>
        <Radio value="dogs">Dogs</Radio>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radios: HTMLInputElement[] = screen.getAllByRole('radio');

    expect(radioGroup).toBeVisible();
    expect(radios).toHaveLength(2);

    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(true);

    fireEvent.click(screen.getByLabelText('Cats'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('cats');

    expect(radios[0].checked).toBe(true);
    expect(radios[1].checked).toBe(false);
  });

  it('should support being disabled', () => {
    const onChange = jest.fn();

    render(
      <RadioGroup isDisabled label="Test" onChange={onChange}>
        <Radio value="cats">Cats</Radio>
        <Radio value="dogs">Dogs</Radio>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radios: HTMLInputElement[] = screen.getAllByRole('radio');

    expect(radioGroup).toBeVisible();
    expect(radios).toHaveLength(2);

    expect(radios[0]).toHaveAttribute('disabled');
    expect(radios[1]).toHaveAttribute('disabled');
  });

  it('should support disabled radios', () => {
    const onChange = jest.fn();

    render(
      <RadioGroup label="Test" onChange={onChange}>
        <Radio value="cats">Cats</Radio>
        <Radio isDisabled value="dogs">
          Dogs
        </Radio>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radios: HTMLInputElement[] = screen.getAllByRole('radio');

    expect(radioGroup).toBeVisible();
    expect(radios).toHaveLength(2);

    expect(radios[0]).not.toHaveAttribute('disabled');
    expect(radios[1]).toHaveAttribute('disabled');

    void userEvent.click(screen.getByLabelText('Dogs'));

    expect(onChange).not.toHaveBeenCalled();

    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(false);

    fireEvent.click(screen.getByLabelText('Cats'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('cats');

    expect(radios[0].checked).toBe(true);
    expect(radios[1].checked).toBe(false);
  });
});
