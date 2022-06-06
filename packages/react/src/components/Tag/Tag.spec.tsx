import * as React from 'react';
import { axe } from 'jest-axe';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('@manifest-ui/tag', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Tag>Custom Tag</Tag>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render with just text', () => {
    render(<Tag>Custom Tag</Tag>);

    expect(screen.getByText('Custom Tag')).toBeDefined();
  });

  it('should support being dismissible', () => {
    const dismissSpy = jest.fn();

    render(
      <Tag isDismissible onDismiss={dismissSpy}>
        Custom Tag
      </Tag>,
    );

    fireEvent.click(screen.getByLabelText('dismiss'));

    expect(dismissSpy).toHaveBeenCalled();
  });
});
