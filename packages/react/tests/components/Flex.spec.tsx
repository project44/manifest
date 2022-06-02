import * as React from 'react';
import { Flex } from '../../src';
import { render } from '@testing-library/react';

describe('@manifest/react - Flex', () => {
  it('should render', () => {
    const { container } = render(<Flex>Flex</Flex>);

    expect(container).toHaveTextContent('Flex');
  });
});
