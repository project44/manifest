import { Button } from '@project44-manifest/react-button';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../src';

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
  const onClose = jest.fn();

  render(
    <Dialog isOpen onClose={onClose}>
      <DialogHeader>Dialog Title</DialogHeader>
      <DialogContent>Dialog Title</DialogContent>
      <DialogFooter>
        <Button>Close</Button>
      </DialogFooter>
    </Dialog>,
  );

  const dialog = screen.getByRole('dialog');
  const heading = screen.getByRole('heading');

  expect(dialog).toBeVisible();
  expect(dialog).toHaveAttribute('aria-labelledby', heading.id);
  expect(document.activeElement).toBe(dialog);

  fireEvent.click(screen.getAllByRole('button')[0]);

  expect(onClose).toHaveBeenCalled();

  fireEvent.mouseDown(document.body);
  fireEvent.mouseUp(document.body);

  expect(onClose).toHaveBeenCalled();
});

it('should render and support keyboard events', () => {
  const onClose = jest.fn();

  render(
    <Dialog isOpen onClose={onClose}>
      <DialogHeader>Dialog Title</DialogHeader>
      <DialogContent>Dialog Title</DialogContent>
      <DialogFooter>
        <Button>Close</Button>
      </DialogFooter>
    </Dialog>,
  );

  const dialog = screen.getByRole('dialog');
  const heading = screen.getByRole('heading');

  expect(dialog).toBeVisible();
  expect(dialog).toHaveAttribute('aria-labelledby', heading.id);
  expect(document.activeElement).toBe(dialog);

  fireEvent.keyDown(dialog, { key: 'Escape' });
  fireEvent.keyUp(dialog, { key: 'Escape' });

  expect(onClose).toHaveBeenCalled();
});

it('should render a non disimissable dialog', () => {
  const onClose = jest.fn();

  render(
    <Dialog isKeyboardDismissDisabled isOpen isDismissable={false} onClose={onClose}>
      <DialogHeader>Dialog Title</DialogHeader>
      <DialogContent>Dialog Title</DialogContent>
      <DialogFooter>
        <Button>Close</Button>
      </DialogFooter>
    </Dialog>,
  );

  const dialog = screen.getByRole('dialog');

  expect(dialog).toBeVisible();
  expect(screen.queryByLabelText('close')).toBeNull();

  fireEvent.keyDown(dialog, { key: 'Escape' });
  fireEvent.keyUp(dialog, { key: 'Escape' });

  expect(onClose).not.toHaveBeenCalled();

  fireEvent.mouseDown(document.body);
  fireEvent.mouseUp(document.body);

  expect(onClose).not.toHaveBeenCalled();
});

it('should support passing props to sub components', () => {
  render(
    <Dialog isOpen>
      <DialogHeader
        buttonProps={{ 'aria-label': 'close' }}
        typographyProps={{ 'aria-label': 'text' }}
      >
        Dialog Title
      </DialogHeader>
      <DialogContent>Dialog Title</DialogContent>
      <DialogFooter>
        <Button>Close</Button>
      </DialogFooter>
    </Dialog>,
  );

  const dialog = screen.getByRole('dialog');

  expect(dialog).toBeVisible();
  expect(screen.getByLabelText('close')).toBeVisible();
  expect(screen.getByLabelText('text')).toBeVisible();
});
