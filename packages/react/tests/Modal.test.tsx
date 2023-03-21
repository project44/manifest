import { act, fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '../src';

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

it('should render and support keyboard events', () => {
  const onClose = jest.fn();

  render(
    <Modal isOpen onClose={onClose}>
      <div data-testid="test" role="dialog">
        test
      </div>
    </Modal>,
  );

  const dialog = screen.getByRole('dialog');

  expect(dialog).toBeVisible();

  fireEvent.keyDown(dialog, { key: 'Escape' });

  expect(onClose).toHaveBeenCalled();
});

it('should render and support click events', () => {
  const onClose = jest.fn();

  const { rerender } = render(
    <Modal isOpen onClose={onClose}>
      <div data-testid="test" role="dialog">
        test
      </div>
    </Modal>,
  );

  const dialog = screen.getByRole('dialog');

  expect(dialog).toBeVisible();

  fireEvent.mouseUp(document.body);

  expect(onClose).not.toHaveBeenCalled();

  rerender(
    <Modal isDismissable isOpen onClose={onClose}>
      <div data-testid="test" role="dialog">
        test
      </div>
    </Modal>,
  );

  fireEvent.mouseDown(document.body);
  fireEvent.mouseUp(document.body);

  expect(onClose).toHaveBeenCalled();
});
