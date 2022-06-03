import * as React from 'react';
import { axe } from 'jest-axe';
import { Flex } from './Flex';
import { render } from '@testing-library/react';

describe('@manifest/react - Flex', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Flex>Flex</Flex>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
