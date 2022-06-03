import * as React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Toggle } from './Toggle';

describe('@manifest-ui/Toggle', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Toggle aria-label="toggle">Toggle</Toggle>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render a Toggle and checking events', () => {
    const container = render(<Toggle>Toggle</Toggle>);

    const input = container.getByRole('switch');

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

  it('should support controlled states', () => {
    const changeSpy = jest.fn();

    const container = render(
      <Toggle checked onCheckedChange={changeSpy}>
        Toggle
      </Toggle>,
    );

    const input = container.getByRole('switch');

    act(() => {
      fireEvent.click(input);
    });

    expect(changeSpy).toHaveBeenCalled();
  });
});
