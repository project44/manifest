import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Overlay, OverlayProps } from '../src';

const Component = React.forwardRef<HTMLDivElement, Omit<OverlayProps, 'children'>>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => {
    setIsOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <>
      <button onClick={handleOpen}>Open Overlay</button>
      <Overlay {...props} ref={ref} isOpen={isOpen}>
        <div data-testid="test">test</div>
      </Overlay>
    </>
  );
});

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
  const ref = React.createRef<HTMLDivElement>();

  const onEntered = jest.fn();
  const onExited = jest.fn();

  render(<Component ref={ref} onEntered={onEntered} onExited={onExited} />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  act(() => {
    jest.runAllTimers();
  });

  expect(screen.getByTestId('test')).toBeInTheDocument();
  expect(onEntered).toHaveBeenCalled();

  const overlayNode = ref.current;

  expect(overlayNode?.parentNode).toBe(document.body);

  fireEvent.click(button);

  act(() => {
    jest.runAllTimers();
  });

  expect(screen.queryByTestId('test')).not.toBeInTheDocument();
  expect(onExited).toHaveBeenCalled();
});

it('should render in parent container', () => {
  const containerRef = React.createRef<HTMLDivElement>();
  const ref = React.createRef<HTMLDivElement>();

  render(
    <div ref={containerRef}>
      <Component ref={ref} containerRef={containerRef} />
    </div>,
  );

  const button = screen.getByRole('button');

  fireEvent.click(button);

  act(() => {
    jest.runAllTimers();
  });

  const overlayNode = ref.current;

  expect(overlayNode?.parentNode).toBe(containerRef.current);
});
