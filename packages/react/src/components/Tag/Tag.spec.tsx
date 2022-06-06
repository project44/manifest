import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Tag } from './Tag';

describe('@manifest/react - Tag', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Tag>Custom Tag</Tag>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should support being removed', () => {
    const onRemove = jest.fn();

    render(<Tag onRemove={onRemove}>Custom Tag</Tag>);

    fireEvent.click(screen.getByLabelText('remove'));

    expect(onRemove).toHaveBeenCalled();
  });

  it('should support being clicked', () => {
    const onClick = jest.fn();

    render(<Tag onClick={onClick}>Custom Tag</Tag>);

    fireEvent.click(screen.getByText('Custom Tag'));

    expect(onClick).toHaveBeenCalled();
  });

  it('should support disabled', () => {
    const onClick = jest.fn();

    render(
      <Tag isDisabled onClick={onClick}>
        Custom Tag
      </Tag>,
    );

    fireEvent.click(screen.getByText('Custom Tag'));

    expect(onClick).not.toHaveBeenCalled();
  });
});
