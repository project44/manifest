import { render, screen } from '@testing-library/react';
import { CssBaseline } from '../src/components/CSSBaseline';

describe('react-css-baseline', () => {
  it('should render', () => {
    render(<CssBaseline>test</CssBaseline>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
