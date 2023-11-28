import * as React from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { Button, toast, Toaster, ToastOptions } from '../../..';

function Component(props: Omit<ToastOptions, 'message'> = {}) {
  const handlePress = React.useCallback(() => {
    toast('Lorem ipsum dolor', {
      ...props,
      action: <Button>Retry</Button>,
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dismissButtonProps: { 'aria-label': 'close' },
    });
  }, [props]);

  return (
    <>
      <Toaster aria-label="notifications" />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
}

beforeEach(() => {
  toast.remove();
  jest.useFakeTimers();
});

afterEach(() => {
  act(() => {
    jest.runAllTimers();
    jest.useRealTimers();
  });
});

it('should render', () => {
  render(<Component isDismissable={false} />);

  const button = screen.getByRole('button');

  expect(screen.queryByRole('alert')).toBeNull();

  fireEvent.click(button);

  const region = screen.getByRole('region');

  expect(region).toHaveAttribute('aria-label', 'notifications');

  const alert = screen.getByRole('alert');

  expect(alert).toBeVisible();

  act(() => {
    jest.advanceTimersByTime(6000);
  });

  expect(screen.queryByRole('alert')).toBeNull();
});

it('should support manually dismissing the toast', () => {
  const onDimiss = jest.fn();

  render(<Component onDismiss={onDimiss} />);

  const button = screen.getByRole('button');

  expect(screen.queryByRole('alert')).toBeNull();

  fireEvent.click(button);

  const alert = screen.getByRole('alert');
  const dismissButton = within(alert).getByLabelText('close');

  fireEvent.click(dismissButton);

  expect(onDimiss).toHaveBeenCalled();

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(screen.queryByRole('alert')).toBeNull();
});

it('should pause timers on hover', () => {
  render(<Component />);

  const button = screen.getByRole('button');

  expect(screen.queryByRole('alert')).toBeNull();

  fireEvent.click(button);

  const alert = screen.getByRole('alert');

  fireEvent.mouseEnter(alert);

  act(() => {
    jest.advanceTimersByTime(6000);
  });

  expect(alert).toBeVisible();

  fireEvent.mouseLeave(alert);

  act(() => {
    jest.advanceTimersByTime(6000);
  });

  expect(screen.queryByRole('alert')).toBeNull();
});

it('should support toast variants', () => {
  render(<Toaster />);

  act(() => {
    toast.success('success');
  });

  act(() => {
    toast.error('error');
  });

  act(() => {
    toast.info('info');
  });

  act(() => {
    toast.warning('warning');
  });

  expect(screen.queryByText('success')).toBeInTheDocument();
  expect(screen.queryByText('error')).toBeInTheDocument();
  expect(screen.queryByText('info')).toBeInTheDocument();
  expect(screen.queryByText('warning')).toBeInTheDocument();
});
