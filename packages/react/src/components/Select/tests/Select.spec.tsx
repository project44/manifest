import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormControl, FormControlLabel } from '../../FormControl';
import { axe } from 'jest-axe';
import { Icon } from '../../Icon';
import { Select } from '../Select';
import { SelectOption } from '../SelectOption';

describe('@manifest/react - Select', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <FormControl>
        <FormControlLabel>Select</FormControlLabel>
        <Select>
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
      </FormControl>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render and allow a user to choose an option', () => {
    const onChange = jest.fn();

    render(
      <Select onChange={onChange} startIcon={<Icon data-testid="start" />}>
        <SelectOption value="one">One</SelectOption>
        <SelectOption value="two">Two</SelectOption>
        <SelectOption value="three">Three</SelectOption>
      </Select>,
    );

    fireEvent.change(screen.getByDisplayValue('One'), { target: { value: 'two ' } });

    expect(onChange).toHaveBeenCalled();
  });
});
