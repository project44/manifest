import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Transition, TransitionProps } from '../src';

function TestComponent(props: Omit<TransitionProps, 'children' | 'getTransitionStyle'>) {
  const [show, setShow] = React.useState(false);

  const toggle = () => void setShow((prevState) => !prevState);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Transition {...props} in={show}>
        <div>Hello world</div>
      </Transition>
    </div>
  );
}

describe('transition', () => {
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

    expect(screen.getByText('Hello world')).not.toBeVisible();

    fireEvent.click(screen.getByText('Toggle'));

    expect(screen.getByText('Hello world')).toBeVisible();

    fireEvent.click(screen.getByText('Toggle'));

    expect(screen.getByText('Hello world')).not.toBeVisible();
  });

  it('should call each callback', () => {
    const onAddEndListener = jest.fn();
    const onEnter = jest.fn();
    const onEntering = jest.fn();
    const onEntered = jest.fn();
    const onExit = jest.fn();
    const onExiting = jest.fn();
    const onExited = jest.fn();

    render(
      <TestComponent
        addEndListener={onAddEndListener}
        onEnter={onEnter}
        onEntered={onEntered}
        onEntering={onEntering}
        onExit={onExit}
        onExited={onExited}
        onExiting={onExiting}
      />,
    );

    expect(screen.getByText('Hello world')).not.toBeVisible();

    fireEvent.click(screen.getByText('Toggle'));

    expect(onEnter).toHaveBeenCalled();
    expect(onEntering).toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(onEntered).toHaveBeenCalled();
    expect(onAddEndListener).toHaveBeenCalled();

    fireEvent.click(screen.getByText('Toggle'));

    expect(onExit).toHaveBeenCalled();
    expect(onExiting).toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(onExited).toHaveBeenCalled();
    expect(onAddEndListener).toHaveBeenCalledTimes(2);
  });
});
