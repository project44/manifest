import * as React from 'react';
import { axe } from 'jest-axe';
import { Icon } from './Icon';
import { render } from '@testing-library/react';

describe('@manifest/react - Icon', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Icon icon="face" />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
