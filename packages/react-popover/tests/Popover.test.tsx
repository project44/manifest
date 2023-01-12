import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
  Popover,
  PopoverProps,
  usePopover,
  UsePopoverProps,
  usePopoverState,
  UsePopoverStateProps,
} from '../src';

function Component(props: PopoverProps & UsePopoverProps & UsePopoverStateProps) {
  const {
    defaultOpen,
    isOpen,
    maxHeight,
    offset,
    onClose: onCloseProp,
    onOpenChange,
    placement,
    scrollRef,
    shouldFlip,
    shouldUpdatePosition,
    type = 'dialog',
    ...other
  } = props;

  const state = usePopoverState({ defaultOpen, isOpen, onOpenChange });
  const { onClose, overlayProps, overlayRef, triggerProps, triggerRef } = usePopover(state, {
    maxHeight,
    offset,
    onClose: onCloseProp,
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
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();

    act(() => {
      jest.runAllTimers();
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

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

    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);
    fireEvent.click(document.body);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => void expect(popover).not.toBeInTheDocument());
  });

  it('should close on escape key click', async () => {
    render(<Component />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();

    fireEvent.keyDown(popover, { key: 'Escape' });
    fireEvent.keyUp(popover, { key: 'Escape' });

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => void expect(popover).not.toBeInTheDocument());
  });

  it('should close on blur if shouldCloseOnBlur is true', async () => {
    render(<Component shouldCloseOnBlur />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();

    fireEvent.blur(popover);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => void expect(popover).not.toBeInTheDocument());
  });

  it('should not close is isDismissable is false', () => {
    render(<Component isDismissable={false} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const popover = screen.getByRole('dialog');

    expect(popover).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);
    fireEvent.click(document.body);

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
