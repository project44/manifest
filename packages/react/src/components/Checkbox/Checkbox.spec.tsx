import * as React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Checkbox } from './Checkbox';

describe('@manifest/react - Checkbox', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Checkbox aria-label="checkbox">Checkbox</Checkbox>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render a checkbox and checking events', () => {
    const container = render(<Checkbox>Checkbox</Checkbox>);

    const input = container.getByRole('checkbox');

    expect(input).not.toBeChecked();

    // Input interactions
    act(() => {
      fireEvent.click(input);
    });

    expect(input).toBeChecked();

    act(() => {
      fireEvent.click(input);
    });

    expect(input).not.toBeChecked();
  });

  it('should support indeterminate state', () => {
    const changeSpy = jest.fn();

    const container = render(
      <Checkbox checked="indeterminate" onCheckedChange={changeSpy}>
        Checkbox
      </Checkbox>,
    );

    const input = container.getByRole('checkbox');

    expect(input).toHaveAttribute('aria-checked', 'mixed');

    act(() => {
      fireEvent.click(input);
    });

    expect(changeSpy).toHaveBeenCalled();
  });
});
