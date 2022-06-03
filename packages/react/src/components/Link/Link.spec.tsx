import * as React from 'react';
import { axe } from 'jest-axe';
import { Link } from './Link';
import { render } from '@testing-library/react';

describe('@manifest/react - Link', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Link href="https://p44design.systems">Link</Link>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
