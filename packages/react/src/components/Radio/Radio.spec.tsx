import * as React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('@manifest/react - Radio', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <RadioGroup defaultValue="one">
        <Radio aria-label="one" value="one">
          One
        </Radio>
        <Radio aria-label="two" value="two">
          Two
        </Radio>
        <Radio aria-label="three" value="three">
          Three
        </Radio>
      </RadioGroup>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render and support checking the radios', () => {
    const container = render(
      <RadioGroup defaultValue="one">
        <Radio value="one">One</Radio>
        <Radio value="two">Two</Radio>
        <Radio value="three">Three</Radio>
      </RadioGroup>,
    );

    expect(container.getByRole('radiogroup')).toBeVisible();

    const inputs = container.queryAllByRole('radio');

    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();

    act(() => {
      fireEvent.click(inputs[2]);
    });

    expect(inputs[0]).not.toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).toBeChecked();

    container.rerender(
      <RadioGroup defaultValue="one" orientation="horizontal">
        <Radio value="one">One</Radio>
        <Radio value="two">Two</Radio>
        <Radio value="three">Three</Radio>
      </RadioGroup>,
    );

    expect(container.getByRole('radiogroup')).toBeVisible();
  });

  it('should support controlled states', () => {
    const handleChange = jest.fn();

    const container = render(
      <RadioGroup onValueChange={handleChange} value="one">
        <Radio value="one">One</Radio>
        <Radio value="two">Two</Radio>
        <Radio value="three">Three</Radio>
      </RadioGroup>,
    );

    const inputs = container.queryAllByRole('radio');

    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();

    act(() => {
      fireEvent.click(inputs[2]);
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
