import * as React from 'react';
import { axe } from 'jest-axe';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { render } from '@testing-library/react';

describe('@manifest/react- ButtonGroup', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </ButtonGroup>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
