import * as React from 'react';
import { axe } from 'jest-axe';
import { Box } from './Box';
import { render } from '@testing-library/react';

describe('@manifest/react - Box', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Box>Box</Box>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
