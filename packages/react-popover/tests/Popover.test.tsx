import {
  accessibility,
  fireEvent,
  render,
  screen,
  triggerPress,
  waitFor,
} from '@project44-manifest/react-test-utils';
import {
  Popover,
  PopoverProps as PopoverProperties,
  usePopover,
  UsePopoverProps as UsePopoverProperties,
  usePopoverState,
  UsePopoverStateProps as UsePopoverStateProperties,
} from '../src';

function Component(properties: PopoverProperties & UsePopoverProperties & UsePopoverStateProperties) {
  const {
    defaultOpen,
    isOpen,
    maxHeight,
    offset,
    onClose: onCloseProperty,
    onOpenChange,
    placement,
    scrollRef,
    shouldFlip,
    shouldUpdatePosition,
    type = 'dialog',
    ...other
  } = properties;

  const state = usePopoverState({ defaultOpen, isOpen, onOpenChange });
  const { onClose, overlayProps, overlayRef, triggerProps, triggerRef } = usePopover(state, {
    maxHeight,
    offset,
    onClose: onCloseProperty,
    placement,
    scrollRef,
    shouldFlip,
    shouldUpdatePosition,
    type,
  });

  return (
    <>
      <button {...triggerProps} ref={triggerRef}>
        Open
      </button>
      <Popover
        {...overlayProps}
        ref={overlayRef}
        isOpen={state.isOpen}
        onClose={onClose}
        {...other}
      >
        Popover
      </Popover>
    </>
  );
}

describe('react-popover', () => {
  accessibility(<Component />);

  it('should open on click', () => {
    render(<Component />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();
  });

  it('should open on enter key press', () => {
    render(<Component />);

    const button = screen.getByRole('button');

    fireEvent.keyDown(button, { key: 'Enter' });
    fireEvent.keyUp(button, { key: 'Enter' });

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();
  });

  it('should open on space key press', () => {
    render(<Component />);

    const button = screen.getByRole('button');

    fireEvent.keyDown(button, { key: ' ' });
    fireEvent.keyUp(button, { key: ' ' });

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();
  });

  it('should close on outside click', async () => {
    render(<Component />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();

    triggerPress(document.body);

    await waitFor(() => {
      expect(popover).not.toBeInTheDocument();
    });
  });

  it('should close on escape key click', async () => {
    render(<Component />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();

    fireEvent.keyDown(popover, { key: 'Escape' });
    fireEvent.keyUp(popover, { key: 'Escape' });

    await waitFor(() => {
      expect(popover).not.toBeInTheDocument();
    });
  });

  it('should close on blur if shouldCloseOnBlur is true', async () => {
    render(<Component shouldCloseOnBlur />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();

    fireEvent.blur(popover);

    await waitFor(() => {
      expect(popover).not.toBeInTheDocument();
    });
  });

  it('should not close is isDismissable is false', () => {
    render(<Component isDismissable={false} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();

    triggerPress(document.body);

    expect(popover).toBeInTheDocument();

    fireEvent.keyDown(popover, { key: 'Escape' });
    fireEvent.keyUp(popover, { key: 'Escape' });

    expect(popover).toBeInTheDocument();
  });

  it('should focus the popover on mount if navigated to by keyboard', () => {
    render(<Component />);

    const button = screen.getByRole('button');

    fireEvent.keyDown(button, { key: ' ' });
    fireEvent.keyUp(button, { key: ' ' });

    const popover = screen.getByRole('dialog');

    expect(popover).toHaveAttribute('tabIndex', '-1');
    expect(document.activeElement).toBe(popover);
  });

  it('should support being controlled', () => {
    const onOpenChange = jest.fn();
    render(<Component isOpen onOpenChange={onOpenChange} />);

    const button = screen.getAllByRole('button')[0];

    fireEvent.click(button);

    expect(onOpenChange).toHaveBeenCalled();
  });
});
