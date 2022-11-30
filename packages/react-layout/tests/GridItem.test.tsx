import { render, screen } from '@project44-manifest/react-test-utils';
import { GridItem } from '../src';

describe('react-layout - GridItem', () => {
  it('should render correctly', () => {
    render(<GridItem>Hello World</GridItem>);

    const container = screen.getByText('Hello World');

    expect(container).toBeVisible();
  });
});
