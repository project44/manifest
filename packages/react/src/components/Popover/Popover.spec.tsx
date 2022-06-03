import * as React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Popover } from './Popover';
import { PopoverAnchor } from './PopoverAnchor';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';

function ControlledPopover() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover isOpen={isOpen} onChange={setIsOpen}>
      <PopoverTrigger>
        <button>Open</button>
      </PopoverTrigger>
      <PopoverContent>Content</PopoverContent>
    </Popover>
  );
}

describe('@manifest/react - Popover', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <Popover isOpen>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render', () => {
    const container = render(
      <Popover>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );

    const trigger = container.getByRole('button');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    act(() => {
      fireEvent.click(trigger);
    });

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(container.getByRole('dialog')).toBeInTheDocument();

    // Escape close the popover
    act(() => {
      fireEvent.keyDown(container.getByRole('dialog'), { key: 'Escape' });
    });

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(container.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should not call events if not open', () => {
    const clickOutsideSpy = jest.fn();
    const escapeKeySpy = jest.fn();

    const container = render(
      <Popover onOutsideClick={clickOutsideSpy} onEscapeKeyDown={escapeKeySpy}>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );

    fireEvent.keyDown(container.getByRole('button'), { key: 'Escape' });

    expect(escapeKeySpy).not.toHaveBeenCalled();

    fireEvent.click(document.body);

    expect(clickOutsideSpy).not.toHaveBeenCalled();
  });

  it('should render with anchor', async () => {
    const container = render(
      <Popover>
        <PopoverAnchor>
          <input placeholder="Popover anchor" />
        </PopoverAnchor>
        <PopoverTrigger>
          <button>click me</button>
        </PopoverTrigger>
        <PopoverContent>hello world</PopoverContent>
      </Popover>,
    );

    const trigger = container.getByRole('button');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(container.getByRole('dialog')).toBeInTheDocument();
    });
  });

  it('should support controlled state', () => {
    const container = render(<ControlledPopover />);

    expect(container.queryByRole('dialog')).toBeNull();

    fireEvent.click(container.getByRole('button'));

    expect(container.getByRole('dialog')).toBeDefined();
  });
});
