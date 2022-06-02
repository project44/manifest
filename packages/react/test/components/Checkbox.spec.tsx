import * as React from 'react';
import { FormControl, FormControlLabel } from '../../FormControl';
import { axe } from 'jest-axe';
import { Checkbox } from '../../src';
import { render } from '@testing-library/react';

describe('@manifest/react - FormControl', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <FormControl>
        <Checkbox />
        <FormControlLabel>Checkbox</FormControlLabel>
      </FormControl>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
