import * as React from 'react';
import { Typography } from '../../src';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

describe('@manifest/react - Typography', () => {
  it('should render', () => {
    const { container } = render(<Typography>Typography</Typography>);

    expect(container).toHaveTextContent('Typography');
  });
});
