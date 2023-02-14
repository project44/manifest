import { Button } from '@project44-manifest/react-button';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Popover, PopoverContent, PopoverTrigger } from '../src';

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
  render(
    <Popover>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div data-testid="test">Test</div>
      </PopoverContent>
    </Popover>,
  );

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
  render(
    <Popover>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div data-testid="test">Test</div>
      </PopoverContent>
    </Popover>,
  );

  const button = screen.getByRole('button');

  fireEvent.keyDown(button, { key: 'Enter' });
  fireEvent.keyUp(button, { key: 'Enter' });

  act(() => {
    jest.runAllTimers();
  });

  let popover = screen.getByRole('presentation');

  expect(popover).toBeInTheDocument();

  fireEvent.keyDown(popover, { key: 'Escape' });
  fireEvent.keyUp(popover, { key: 'Escape' });

  act(() => {
    jest.runAllTimers();
  });

  expect(popover).not.toBeInTheDocument();

  fireEvent.keyDown(button, { key: ' ' });
  fireEvent.keyUp(button, { key: ' ' });

  popover = screen.getByRole('presentation');

  expect(popover).toBeInTheDocument();
});

it('should not close is isDismissable is false', () => {
  render(
    <Popover isKeyboardDismissDisabled isDismissable={false}>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div data-testid="test">Test</div>
      </PopoverContent>
    </Popover>,
  );

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
  render(
    <Popover isOpen onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div data-testid="test">Test</div>
      </PopoverContent>
    </Popover>,
  );

  const button = screen.getAllByRole('button')[0];

  fireEvent.click(button);

  expect(onOpenChange).toHaveBeenCalled();
});
