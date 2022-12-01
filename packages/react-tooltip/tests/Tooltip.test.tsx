import {
  accessibility,
  act,
  fireEvent,
  render,
  screen,
  triggerPress,
  waitFor,
} from '@project44-manifest/react-test-utils';
import { Tooltip } from '../src';

describe('react-tooltip', () => {
  beforeEach(() => {
    fireEvent.keyDown(document.body, { key: 'Tab' });
    fireEvent.keyUp(document.body, { key: 'Tab' });
  });

  accessibility(
    <Tooltip isOpen aria-label="tooltip">
      <button>Open Tooltip</button>
    </Tooltip>,
  );

  it('should open on hover', async () => {
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

    fireEvent.mouseLeave(button);

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should open on focus', async () => {
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

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should close with escape', async () => {
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

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should close if trigger is clicked', async () => {
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

    triggerPress(button);

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should not close if tooltip is hovered', async () => {
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

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should support delay', async () => {
    jest.useFakeTimers();

    const DELAY = 250;

    render(
      <Tooltip delay={DELAY} title="Tooltip">
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
      jest.advanceTimersByTime(DELAY);
    });

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    jest.useRealTimers();
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
