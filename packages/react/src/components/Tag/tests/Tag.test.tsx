import { fireEvent, render, screen } from '@testing-library/react';
import { Tag } from '../../..';

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
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('should show copy icon and copy text when clicked', () => {
    const mockClipboard = { writeText: jest.fn().mockResolvedValue(undefined) };
    Object.defineProperty(global.navigator, 'clipboard', {
      value: mockClipboard,
      writable: true,
      configurable: true,
    });

    render(
      <Tag isCopyable label="copy-me">
        CopyMe
      </Tag>,
    );

    expect(document.querySelector('.manifest-tag__copy-icon')).toBeInTheDocument();

    // Click the tag to trigger copy
    const tag = screen.getByText('CopyMe').closest('.manifest-tag');
    fireEvent.click(tag!);

    // Check that clipboard was called
    expect(mockClipboard.writeText).toHaveBeenCalledWith('copy-me');
  });
});
