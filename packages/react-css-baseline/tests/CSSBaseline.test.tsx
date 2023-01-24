import { render, screen } from '@testing-library/react';
import { CSSBaseline } from '../src';

describe('react-css-baseline', () => {
  it('should render', () => {
    render(<CSSBaseline>test</CSSBaseline>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
