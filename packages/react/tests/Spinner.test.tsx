import { render, screen } from '@testing-library/react';
import { Spinner } from '../src';

describe('spinner', () => {
  it('should render', () => {
    render(<Spinner />);

    expect(screen.getByRole('img', { hidden: true })).toBeDefined();
  });
});
