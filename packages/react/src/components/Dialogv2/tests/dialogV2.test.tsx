import { act, render, screen } from '@testing-library/react';
import { DialogV2, DialogV2Size } from '../dialogv2';

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

it('should render dialogV2', () => {
  const onClose = jest.fn();
  render(
    <DialogV2
      isOpen
      body="Some string"
      headerProps={{
        onClose,
        title: 'some title',
      }}
    />,
  );

  expect(screen.getByTestId('dialogV2Wrapper')).toBeInTheDocument();
});

it('should render footer', () => {
  const onClose = jest.fn();
  render(
    <DialogV2
      isOpen
      body="Some string"
      footer="Some footer text that i need to place"
      headerProps={{
        onClose,
        title: 'some title',
      }}
    />,
  );

  expect(screen.getByTestId('dialogV2Footer')).toBeInTheDocument();
});

it('should react to size', () => {
  const onClose = jest.fn();
  render(
    <DialogV2
      isOpen
      body="Some string"
      footer="Some footer text that i need to place"
      headerProps={{
        onClose,
        title: 'some title',
      }}
      size={DialogV2Size.small}
    />,
  );
  expect(screen.getByTestId('dialogV2Wrapper').className).toContain('manifest-dialog-small');
});
