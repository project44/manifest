import { fireEvent, render, screen } from '@testing-library/react';
import { Tag } from '../src';

describe('tag', () => {
  it('should render tag', () => {
    render(<Tag label="default">Default</Tag>);

    expect(screen.getByText('Default')).toBeDefined();
  });

  it('should remove tag when clicked', () => {
    const onRemove = jest.fn();
    render(
      <Tag isRemovable label="default" onRemove={onRemove}>
        Default
      </Tag>,
    );

    expect(screen.getByRole('button')).toBeDefined();
    fireEvent.click(screen.getByRole('button'));
    expect(onRemove).toHaveBeenCalled();
  });
});
