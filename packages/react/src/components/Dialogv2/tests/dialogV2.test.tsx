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
  let onClose = jest.fn();
  render(
    <DialogV2
      isOpen={true}
      body="Some string"
      headerProps={{
        onClose: onClose,
        title: 'some title',
      }}
    />,
  );

  expect(screen.getByTestId('dialogV2Wrapper')).toBeInTheDocument();
});

it('should render footer', () => {
  let onClose = jest.fn();
  render(
    <DialogV2
      isOpen={true}
      body="Some string"
      headerProps={{
        onClose: onClose,
        title: 'some title',
      }}
      footer="Some footer text that i need to place"
    />,
  );

  expect(screen.getByTestId('dialogV2Footer')).toBeInTheDocument();
});

it('should react to size', () => {
  let onClose = jest.fn();
  render(
    <DialogV2
      size={DialogV2Size.small}
      isOpen={true}
      body="Some string"
      headerProps={{
        onClose: onClose,
        title: 'some title',
      }}
      footer="Some footer text that i need to place"
    />,
  );
  expect(screen.getByTestId('dialogV2Wrapper').className.includes('manifest-dialog-small')).toBe(
    true,
  );
});
