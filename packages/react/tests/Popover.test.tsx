import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import {
  Button,
  Overlay,
  OverlayProvider,
  Popover,
  PopoverProps,
  PopoverTriggerProps,
  PopoverTriggerStateProps,
  usePopoverTrigger,
  usePopoverTriggerState,
} from '../src';

function Component(
  props: PopoverProps &
    PopoverTriggerProps &
    PopoverTriggerStateProps & { children?: React.ReactNode },
) {
  const {
    children,
    defaultOpen,
    isOpen,
    maxHeight,
    offset,
    onClose,
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

  const handleClose = React.useCallback(() => {
    state.close();

    onClose?.();
  }, [state, onClose]);

  return (
    <OverlayProvider>
      <Button {...triggerProps} ref={triggerRef}>
        Open
      </Button>
      <Overlay isOpen={state.isOpen}>
        <Popover
          {...overlayProps}
          ref={overlayRef}
          isOpen={state.isOpen}
          onClose={handleClose}
          {...other}
        >
          <div data-testid="popover">{children}</div>
        </Popover>
      </Overlay>
    </OverlayProvider>
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

it('should render and support click events', () => {
  render(<Component />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  const popover = screen.getByTestId('popover');

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

  const popover = screen.getByTestId('popover');

  expect(popover).toBeInTheDocument();

  fireEvent.keyDown(popover, { key: 'Escape' });
  fireEvent.keyUp(popover, { key: 'Escape' });

  act(() => {
    jest.runAllTimers();
  });

  expect(popover).not.toBeInTheDocument();
});

it('should close on blur if shouldCloseOnBlur is true', () => {
  render(
    <Component shouldCloseOnBlur>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <input autoFocus />
    </Component>,
  );

  const button = screen.getByRole('button');

  fireEvent.click(button);

  const popover = screen.getByTestId('popover');

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

  const popover = screen.getByTestId('popover');

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
