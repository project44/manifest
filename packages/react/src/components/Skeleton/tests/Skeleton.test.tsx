import { render, screen } from '@testing-library/react';
import { Skeleton } from '../../..';

describe('skeleton', () => {
  it('should render', () => {
    render(
      <Skeleton height={196} width={325}>
        <rect height="6" rx="3" ry="3" width="88" x="48" y="8" />
      </Skeleton>,
    );

    expect(screen.getByRole('img')).toBeDefined();
  });
});
