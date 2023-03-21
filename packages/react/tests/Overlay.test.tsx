import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Overlay, OverlayProps } from '../src/components/Overlay';

function Component(props: Omit<OverlayProps, 'children'>) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => {
    setIsOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <>
      <button onClick={handleOpen}>Open Overlay</button>
      <Overlay {...props} isOpen={isOpen}>
        <div data-testid="test">test</div>
      </Overlay>
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

it('should render', () => {
  render(<Component />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  act(() => {
    jest.runAllTimers();
  });

  expect(screen.getByTestId('test')).toBeInTheDocument();

  fireEvent.click(button);

  act(() => {
    jest.runAllTimers();
  });

  expect(screen.queryByTestId('test')).not.toBeInTheDocument();
});
