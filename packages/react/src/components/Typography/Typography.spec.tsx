import * as React from 'react';
import { Typography } from './Typography';
import { render } from '@testing-library/react';

describe('@manifest/react - Typography', () => {
  it('should render', () => {
    const { container } = render(<Typography>Typography</Typography>);

    expect(container).toHaveTextContent('Typography');
  });
});
