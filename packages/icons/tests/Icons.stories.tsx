import { render, screen } from '@testing-library/react';
import { Icons } from '../src';

describe('Icons', () => {
  it('should render', () => {
    render(<Icons>test</Icons>);

    expect(screen.getByText('test')).toBeDefined();
  });
});
