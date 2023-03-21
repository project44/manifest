import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Collapse, CollapseProps } from '../src';

function TestComponent(props: Omit<CollapseProps, 'children'>) {
  const [show, setShow] = React.useState(false);

  const toggle = () => void setShow((prevState) => !prevState);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Collapse {...props} in={show}>
        <div data-testid="test">Hello world</div>
      </Collapse>
    </div>
  );
}

describe('collapse', () => {
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

    expect(screen.getByTestId('test').parentElement).toHaveStyle('height: 0px');

    fireEvent.click(screen.getByText('Toggle'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId('test').parentElement).toHaveStyle('height: auto');

    fireEvent.click(screen.getByText('Toggle'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId('test').parentElement).toHaveStyle('height: 0px');
  });

  it('should call each callback', () => {
    const onEnter = jest.fn();
    const onEntering = jest.fn();
    const onEntered = jest.fn();
    const onExit = jest.fn();
    const onExiting = jest.fn();

    render(
      <TestComponent
        onEnter={onEnter}
        onEntered={onEntered}
        onEntering={onEntering}
        onExit={onExit}
        onExiting={onExiting}
      />,
    );

    fireEvent.click(screen.getByText('Toggle'));

    expect(onEnter).toHaveBeenCalled();
    expect(onEntering).toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(onEntered).toHaveBeenCalled();

    fireEvent.click(screen.getByText('Toggle'));

    expect(onExit).toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(onExiting).toHaveBeenCalled();
  });
});
