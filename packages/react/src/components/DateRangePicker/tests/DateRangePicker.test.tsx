import { OverlayProvider } from '@react-aria/overlays';
import { CalendarDate, endOfMonth, startOfMonth } from '@internationalized/date';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { DateRangePicker } from '../../..';
import { DefinedRange } from '../../CalendarRanges';
import { addMonths, createCalendarDate } from '../../CalendarRanges/defaultDefinedRanges';

describe('@project44-manifest/components - DateRangePicker', () => {
  let defaultDate: Date;
  let customRanges: DefinedRange[];

  beforeAll(() => {
    // * used for the custom Ranges To start defining the ranges.
    defaultDate = new Date();

    const calendarDate = createCalendarDate(defaultDate);

    const defineds = {
      startOfLastThreeMonths: startOfMonth(addMonths(calendarDate, -3)),
      endOfLastThreeMonths: endOfMonth(addMonths(calendarDate, -1)),
      startOfLastSixMonths: startOfMonth(addMonths(calendarDate, -6)),
      endOfLastSixMonths: endOfMonth(addMonths(calendarDate, -1)),
      startOfLastYear: startOfMonth(addMonths(calendarDate, -13)),
      endOfLastYear: endOfMonth(addMonths(calendarDate, -1)),
      startOfLastTwoYears: startOfMonth(addMonths(calendarDate, -25)),
      endOfLastTwoYears: endOfMonth(addMonths(calendarDate, -1)),
    };

    customRanges = [
      {
        key: 'lastThreeMonths',
        label: 'Last three months',
        value: {
          start: defineds.startOfLastThreeMonths,
          end: defineds.endOfLastThreeMonths,
        },
      },
      {
        key: 'lastSixMonths',
        label: 'Last six months',
        value: {
          start: defineds.startOfLastSixMonths,
          end: defineds.endOfLastSixMonths,
        },
      },
      {
        key: 'lastYear',
        label: 'Last Year',
        value: {
          start: defineds.startOfLastYear,
          end: defineds.endOfLastYear,
        },
      },
      {
        key: 'lastTwoYears',
        label: 'Last Two Years',
        value: {
          start: defineds.startOfLastTwoYears,
          end: defineds.endOfLastTwoYears,
        },
      },
    ];

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
        <DateRangePicker
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('Jul 2, 2022 - Jul 12, 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    const cells = screen.getAllByRole('gridcell');
    const selected = cells.find((cell) => cell.getAttribute('aria-selected') === 'true');

    expect(selected?.children[0]).toHaveAttribute(
      'aria-label',
      'Selected Range: Saturday, July 2 to Tuesday, July 12, 2022, Saturday, July 2, 2022 selected',
    );

    fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
    fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

    act(() => {
      jest.runAllTimers();
    });

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DateRangePicker
          aria-label="Calendar"
          value={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('Jul 2, 2022 - Jul 12, 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    const cells = screen.getAllByRole('gridcell');
    const selected = cells.find((cell) => cell.getAttribute('aria-selected') === 'true');

    expect(selected?.children[0]).toHaveAttribute(
      'aria-label',
      'Selected Range: Saturday, July 2 to Tuesday, July 12, 2022, Saturday, July 2, 2022 selected',
    );

    fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
    fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

    act(() => {
      jest.runAllTimers();
    });

    expect(dialog).not.toBeInTheDocument();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should close datepicker when outside click is register', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
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

  it('should support selecting a relative date', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('Jul 2, 2022 - Jul 12, 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    fireEvent.click(screen.getByText('Yesterday'));

    act(() => {
      jest.runAllTimers();
    });

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should support selecting a custom relative date', () => {
    const onChange = jest.fn();
    const chosenRange = customRanges[customRanges.length - 1];

    render(
      <OverlayProvider>
        <DateRangePicker
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          ranges={customRanges}
          onChange={onChange}
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('Jul 2, 2022 - Jul 12, 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    fireEvent.click(screen.getByText('Last Two Years'));

    act(() => {
      jest.runAllTimers();
    });

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: chosenRange?.value.start,
      end: chosenRange?.value.end,
    });
  });
});
