import { render, screen } from '@testing-library/react';
import { Grid } from '../src/components/Layout';

describe('react-layout - Grid', () => {
  it('should render correctly', () => {
    render(<Grid>Hello World</Grid>);

    const container = screen.getByText('Hello World');

    expect(container).toBeVisible();
  });
});
