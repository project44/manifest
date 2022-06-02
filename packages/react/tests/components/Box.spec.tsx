import * as React from 'react';
import { Box } from '../../src';
import { render } from '@testing-library/react';

describe('@manifest/react - Box', () => {
  it('should render', () => {
    const { container } = render(<Box>Box</Box>);

    expect(container).toHaveTextContent('Box');
  });
});
