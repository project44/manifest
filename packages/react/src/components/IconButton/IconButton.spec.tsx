import * as React from 'react';
import { axe } from 'jest-axe';
import { Icon } from '../Icon';
import { IconButton } from './IconButton';
import { render } from '@testing-library/react';

describe('@manifest/react- IconButton', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <IconButton>
        <Icon icon="add" />
      </IconButton>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
