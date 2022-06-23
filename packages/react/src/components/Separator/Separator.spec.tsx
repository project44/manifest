import * as React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { Separator } from './Separator';

describe('@manifest/react - Separator', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Separator />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
