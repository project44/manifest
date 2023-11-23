import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Fade, FadeProps } from '../../..';

function TestComponent(props: Omit<FadeProps, 'children'>) {
  const [show, setShow] = React.useState(false);

  const toggle = () => void setShow((prevState) => !prevState);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade {...props} in={show}>
        <div data-testid="test">Hello world</div>
      </Fade>
    </div>
  );
}

describe('fade', () => {
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
    render(<TestComponent />);

    expect(screen.getByTestId('test')).not.toBeVisible();

    fireEvent.click(screen.getByText('Toggle'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId('test')).toBeVisible();

    fireEvent.click(screen.getByText('Toggle'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId('test')).not.toBeVisible();
  });

  it('should call each callback', () => {
    const onEnter = jest.fn();
    const onExit = jest.fn();

    render(<TestComponent onEnter={onEnter} onExit={onExit} />);

    fireEvent.click(screen.getByText('Toggle'));

    expect(onEnter).toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    fireEvent.click(screen.getByText('Toggle'));

    expect(onExit).toHaveBeenCalled();
  });
});
