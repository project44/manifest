import { Button } from '@project44-manifest/react-button';
import { act, fireEvent, render, screen } from '@testing-library/react';
import {
  Popover,
  PopoverProps,
  PopoverTriggerProps,
  PopoverTriggerStateProps,
  usePopoverTrigger,
  usePopoverTriggerState,
} from '../src';

function Component(
  props: Omit<PopoverProps, 'state' | 'triggerRef'> &
    PopoverTriggerProps &
    PopoverTriggerStateProps,
) {
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

  const state = usePopoverTriggerState({ defaultOpen, isOpen, onOpenChange });
  const { overlayProps, overlayRef, triggerProps, triggerRef } = usePopoverTrigger(
    {
      maxHeight,
      offset,
      placement,
      scrollRef,
      shouldFlip,
      shouldUpdatePosition,
      type,
    },
    state,
  );

  return (
    <>
      <Button {...triggerProps} ref={triggerRef}>
        Open
      </Button>
      <Popover {...overlayProps} ref={overlayRef} state={state} triggerRef={triggerRef} {...other}>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <button autoFocus>Button</button>
        Popover
      </Popover>
    </>
  );
}

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

it('should render and support mouse events', () => {
  render(<Component />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  act(() => {
    jest.runAllTimers();
  });

  const popover = screen.getByRole('presentation');

  expect(popover).toBeInTheDocument();

  fireEvent.mouseDown(document.body);
  fireEvent.mouseUp(document.body);
  fireEvent.click(document.body);

  act(() => {
    jest.runAllTimers();
  });

  expect(popover).not.toBeInTheDocument();
});

it('should render and support keyboard events', () => {
  render(<Component />);

  const button = screen.getByRole('button');

  fireEvent.keyDown(button, { key: 'Enter' });
  fireEvent.keyUp(button, { key: 'Enter' });

  act(() => {
    jest.runAllTimers();
  });

  const popover = screen.getByRole('presentation');

  expect(popover).toBeInTheDocument();

  fireEvent.keyDown(popover, { key: 'Escape' });
  fireEvent.keyUp(popover, { key: 'Escape' });

  act(() => {
    jest.runAllTimers();
  });

  expect(popover).not.toBeInTheDocument();
});

it('should render and support closing on blur when shouldCloseOnBlur is true', () => {
  render(<Component shouldCloseOnBlur />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  act(() => {
    jest.runAllTimers();
  });

  const popover = screen.getByRole('presentation');

  expect(popover).toBeInTheDocument();

  fireEvent.blur(popover);

  act(() => {
    jest.runAllTimers();
  });

  expect(popover).not.toBeInTheDocument();
});

it('should not close is isDismissable is false', () => {
  render(<Component isKeyboardDismissDisabled isDismissable={false} />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  const popover = screen.getByRole('presentation');

  expect(popover).toBeInTheDocument();

  fireEvent.mouseDown(document.body);
  fireEvent.mouseUp(document.body);
  fireEvent.click(document.body);

  expect(popover).toBeInTheDocument();

  fireEvent.keyDown(popover, { key: 'Escape' });
  fireEvent.keyUp(popover, { key: 'Escape' });

  expect(popover).toBeInTheDocument();
});

it('should support being controlled', () => {
  const onOpenChange = jest.fn();

  render(<Component isOpen onOpenChange={onOpenChange} />);

  const button = screen.getAllByRole('button')[0];

  fireEvent.click(button);

  expect(onOpenChange).toHaveBeenCalled();
});
