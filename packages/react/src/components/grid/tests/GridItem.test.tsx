import { render, screen } from '@testing-library/react';
import { GridItem } from '../../..';

describe('react-layout - GridItem', () => {
  it('should render correctly', () => {
    render(<GridItem>Hello World</GridItem>);

    const container = screen.getByText('Hello World');

    expect(container).toBeVisible();
  });
});
