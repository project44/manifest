import * as React from 'react';
import { axe } from 'jest-axe';
import { FormControl } from './FormControl';
import { FormControlHelperText } from './FormControlHelperText';
import { FormControlLabel } from './FormControlLabel';
import { Input } from '../Input';
import { render } from '@testing-library/react';

describe('@manifest-ui/form-control', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <FormControl id="input">
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render', () => {
    const container = render(
      <FormControl id="input">
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );

    expect(container.getByRole('group')).toBeVisible();
  });

  it('should render required indicator', () => {
    const container = render(
      <FormControl id="input" isRequired>
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );

    const indicator = container.getByRole('presentation', { hidden: true });

    expect(indicator).toBeVisible();
    expect(indicator).toHaveTextContent('*');

    container.rerender(
      <FormControl id="input">
        <FormControlLabel>Input</FormControlLabel>
        <Input placeholder="input" />
        <FormControlHelperText>This is helper text</FormControlHelperText>
      </FormControl>,
    );

    expect(container.queryByRole('presentation')).not.toBeInTheDocument();
  });
});
