import { act, fireEvent, render, screen } from '@testing-library/react';
import { Tooltip } from '../../..';

describe('react-tooltip', () => {
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

  beforeEach(() => {
    fireEvent.keyDown(document.body, { key: 'Tab' });
    fireEvent.keyUp(document.body, { key: 'Tab' });
  });

  it('should open on hover', () => {
    const onOpenChange = jest.fn();

    render(
      <Tooltip title="Tooltip" onOpenChange={onOpenChange}>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    fireEvent.mouseEnter(button);
    fireEvent.mouseMove(button);

    act(() => {
      jest.runAllTimers();
    });

    expect(onOpenChange).toHaveBeenCalledWith(true);

    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toBeInTheDocument();

    fireEvent.mouseLeave(button);

    act(() => {
      jest.runAllTimers();
    });

    expect(onOpenChange).toHaveBeenCalledTimes(2);
    expect(onOpenChange).toHaveBeenCalledWith(false);

    act(() => {
      jest.runAllTimers();
    });

    expect(tooltip).not.toBeInTheDocument();
  });

  it('should open on focus', () => {
    render(
      <Tooltip delay={0} title="Tooltip">
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    act(() => {
      button.focus();
    });

    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toBeInTheDocument();

    act(() => {
      button.blur();
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should close with escape', () => {
    render(
      <Tooltip delay={0} title="Tooltip">
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    act(() => {
      button.focus();
    });

    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toBeInTheDocument();

    fireEvent.keyDown(document.body, { key: 'Escape' });
    fireEvent.keyUp(document.body, { key: 'Escape' });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should close if trigger is clicked', () => {
    render(
      <Tooltip delay={0} title="Tooltip">
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    act(() => {
      button.focus();
    });

    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toBeInTheDocument();

    fireEvent.mouseDown(button);
    fireEvent.mouseUp(button);
    fireEvent.click(button);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should not close if tooltip is hovered', () => {
    render(
      <Tooltip delay={0} title="Tooltip">
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    fireEvent.mouseEnter(button);
    fireEvent.mouseMove(button);

    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toBeInTheDocument();

    fireEvent.mouseEnter(tooltip);
    fireEvent.mouseMove(tooltip);

    expect(tooltip).toBeInTheDocument();

    fireEvent.mouseLeave(tooltip);

    act(() => {
      jest.runAllTimers();
    });

    // Run exit cyle of fade animation.
    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should support delay', () => {
    render(
      <Tooltip delay={250} title="Tooltip">
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    fireEvent.mouseEnter(button);
    fireEvent.mouseMove(button);

    expect(screen.queryByRole('tooltip')).toBeNull();

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('should be able to be controlled', () => {
    const onOpenChange = jest.fn();

    render(
      <Tooltip delay={0} isOpen={false} title="Tooltip" onOpenChange={onOpenChange}>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    act(() => {
      button.focus();
    });

    expect(onOpenChange).toHaveBeenCalledWith(true);

    act(() => {
      button.blur();
    });

    expect(onOpenChange).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('should be able to be disabled', () => {
    const onOpenChange = jest.fn();

    render(
      <Tooltip isDisabled delay={0} title="Tooltip" onOpenChange={onOpenChange}>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);

    expect(screen.queryByRole('tooltip')).toBeNull();

    const button = screen.getByRole('button');

    fireEvent.mouseEnter(button);
    fireEvent.mouseMove(button);

    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.queryByRole('tooltip')).toBeNull();
  });
});
