import { render, screen } from '@testing-library/react';
import { Flex } from '../src';

describe('react-layout - Flex', () => {
  it('should render correctly', () => {
    render(<Flex>Hello World</Flex>);

    const flex = screen.getByText('Hello World');

    expect(flex).toBeVisible();
  });
});
