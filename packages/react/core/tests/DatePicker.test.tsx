import { OverlayProvider } from '@react-aria/overlays';
import { CalendarDate } from '@internationalized/date';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { DatePicker } from '../src';

describe('@project44-manifest/react - DatePicker', () => {
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

  it('should support selecting a date', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DatePicker
          aria-label="Calendar"
          defaultValue={new CalendarDate(2022, 7, 12)}
          onChange={onChange}
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate).toHaveTextContent('12');

    fireEvent.click(screen.getByText('13'));

    act(() => {
      jest.runAllTimers();
    });

    expect(dialog).not.toBeInTheDocument();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(new CalendarDate(2022, 7, 13));
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DatePicker
          aria-label="Calendar"
          value={new CalendarDate(2022, 7, 12)}
          onChange={onChange}
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate).toHaveTextContent('12');

    fireEvent.click(screen.getByText('13'));

    act(() => {
      jest.runAllTimers();
    });

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(new CalendarDate(2022, 7, 13));
  });

  it('should close datepicker when outside click is register', () => {
    render(
      <OverlayProvider>
        <DatePicker aria-label="Calendar" />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);
    fireEvent.click(document.body);

    act(() => {
      jest.runAllTimers();
    });

    expect(dialog).not.toBeInTheDocument();
  });
});
