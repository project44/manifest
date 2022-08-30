import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

describe('@project44-manifest/react - Flex', () => {
  it('should render', () => {
    const box = 'box-content';

    render(
      <Flex>
        <p data-testid={box}>Box</p>
      </Flex>,
    );

    expect(screen.getByTestId(box)).toHaveTextContent('Box');
    expect(screen.getByTestId(box)).toContainHTML('<p data-testid="box-content">Box</p>');
  });
});
