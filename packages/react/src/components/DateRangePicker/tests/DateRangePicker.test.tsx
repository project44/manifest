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

  it('should render the yesterday date when clicked on yesterday', () => {
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
    const today = new Date();

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const yesterdayDateString = `${yesterday.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })}`;
    expect(screen.getByText(`${yesterdayDateString} - ${yesterdayDateString}`)).toBeVisible();
  });

  it('does not make the ranges rail scrollable unless scrollableRanges is set', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(document.querySelector('.manifest-calendar-ranges')).not.toHaveClass(
      'manifest-calendar-ranges--scrollable',
    );
  });

  it('makes the ranges rail scrollable when scrollableRanges is set', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          scrollableRanges
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(document.querySelector('.manifest-calendar-ranges')).toHaveClass(
      'manifest-calendar-ranges--scrollable',
    );
  });

  it('shows the preset label instead of the date range when rangeDisplayMode is "preset"', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          rangeDisplayMode="preset"
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('Jul 2, 2022 - Jul 12, 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Yesterday'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Yesterday')).toBeVisible();
    expect(screen.queryByText('Jul')).not.toBeInTheDocument();
  });

  it('shows the preset label plus the date range when rangeDisplayMode is "presetWithRange"', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          rangeDisplayMode="presetWithRange"
        />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Yesterday'));

    act(() => {
      jest.runAllTimers();
    });

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayDateString = `${yesterday.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })}`;

    // A single-day preset shows one date in the brackets, not a repeated range.
    expect(screen.getByText(`Yesterday (${yesterdayDateString})`)).toBeVisible();
  });

  it('shows the full range in the brackets for a multi-day preset in presetWithRange mode', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          presetLabel="Last 10 Days"
          rangeDisplayMode="presetWithRange"
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('Last 10 Days (Jul 2, 2022 - Jul 12, 2022)')).toBeVisible();
  });

  it('shows one date in the brackets for a single-day supplied preset label', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 2) }}
          presetLabel="Today"
          rangeDisplayMode="presetWithRange"
        />
      </OverlayProvider>,
    );

    expect(screen.getByText('Today (Jul 2, 2022)')).toBeVisible();
  });

  it('falls back to the date range once a preset selection is edited manually', () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          rangeDisplayMode="preset"
        />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Yesterday'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Yesterday')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Today'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText('Yesterday')).not.toBeInTheDocument();
  });

  it('calls the public onRangeSelect with the picked preset before onChange fires', () => {
    const callOrder: string[] = [];
    const onRangeSelect = jest.fn((range: DefinedRange) =>
      callOrder.push(`onRangeSelect:${range.key}`),
    );
    const onChange = jest.fn(() => callOrder.push('onChange'));

    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
          onRangeSelect={onRangeSelect}
        />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Yesterday'));

    act(() => {
      jest.runAllTimers();
    });

    expect(onRangeSelect).toHaveBeenCalledTimes(1);
    expect(onRangeSelect).toHaveBeenCalledWith(expect.objectContaining({ key: 'yesterday' }));
    expect(callOrder).toEqual(['onRangeSelect:yesterday', 'onChange']);
  });

  it('does not call onRangeSelect for a manual day-by-day calendar pick', () => {
    const onRangeSelect = jest.fn();
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DateRangePicker
          showCalendar
          showRanges
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
          onRangeSelect={onRangeSelect}
        />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
    fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

    act(() => {
      jest.runAllTimers();
    });

    expect(onChange).toHaveBeenCalled();
    expect(onRangeSelect).not.toHaveBeenCalled();
  });
  describe('presetLabel (saved value)', () => {
    const saved = { start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) };

    it('shows the supplied label for a value that did not come from a rail click', () => {
      render(
        <OverlayProvider>
          <DateRangePicker
            showCalendar
            showRanges
            aria-label="Calendar"
            defaultValue={saved}
            presetLabel="Last 7 Days"
            rangeDisplayMode="preset"
          />
        </OverlayProvider>,
      );

      expect(screen.getByText('Last 7 Days')).toBeVisible();
      expect(screen.queryByText('Jul 2, 2022 - Jul 12, 2022')).not.toBeInTheDocument();
    });

    it('shows the supplied label plus the range in presetWithRange mode', () => {
      render(
        <OverlayProvider>
          <DateRangePicker
            showCalendar
            showRanges
            aria-label="Calendar"
            defaultValue={saved}
            presetLabel="Last 7 Days"
            rangeDisplayMode="presetWithRange"
          />
        </OverlayProvider>,
      );

      expect(screen.getByText('Last 7 Days (Jul 2, 2022 - Jul 12, 2022)')).toBeVisible();
    });

    it('ignores the supplied label in the default range mode', () => {
      render(
        <OverlayProvider>
          <DateRangePicker
            showCalendar
            showRanges
            aria-label="Calendar"
            defaultValue={saved}
            presetLabel="Last 7 Days"
          />
        </OverlayProvider>,
      );

      expect(screen.getByText('Jul 2, 2022 - Jul 12, 2022')).toBeVisible();
      expect(screen.queryByText('Last 7 Days')).not.toBeInTheDocument();
    });

    it('keeps the supplied label across re-renders with the same value', () => {
      const ui = (
        <OverlayProvider>
          <DateRangePicker
            showCalendar
            showRanges
            aria-label="Calendar"
            presetLabel="Last 7 Days"
            rangeDisplayMode="preset"
            value={saved}
          />
        </OverlayProvider>
      );
      const { rerender } = render(ui);
      rerender(ui);
      rerender(ui);

      expect(screen.getByText('Last 7 Days')).toBeVisible();
    });

    it('drops the supplied label once the value is edited manually', () => {
      render(
        <OverlayProvider>
          <DateRangePicker
            showCalendar
            showRanges
            aria-label="Calendar"
            defaultValue={saved}
            presetLabel="Last 7 Days"
            rangeDisplayMode="preset"
          />
        </OverlayProvider>,
      );

      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
      fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

      act(() => {
        jest.runAllTimers();
      });

      expect(screen.queryByText('Last 7 Days')).not.toBeInTheDocument();
    });

    it('lets a rail pick replace the supplied label', () => {
      render(
        <OverlayProvider>
          <DateRangePicker
            showCalendar
            showRanges
            aria-label="Calendar"
            defaultValue={saved}
            presetLabel="Last 7 Days"
            rangeDisplayMode="preset"
          />
        </OverlayProvider>,
      );

      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Yesterday'));

      act(() => {
        jest.runAllTimers();
      });

      expect(screen.getByText('Yesterday')).toBeVisible();
      expect(screen.queryByText('Last 7 Days')).not.toBeInTheDocument();
    });

    it('re-anchors to the new value when the label prop changes', () => {
      const make = (value: typeof saved, label: string) => (
        <OverlayProvider>
          <DateRangePicker
            showCalendar
            showRanges
            aria-label="Calendar"
            presetLabel={label}
            rangeDisplayMode="preset"
            value={value}
          />
        </OverlayProvider>
      );
      const { rerender } = render(make(saved, 'Last 7 Days'));
      const next = { start: new CalendarDate(2022, 6, 1), end: new CalendarDate(2022, 6, 30) };
      rerender(make(next, 'Last 30 Days'));

      expect(screen.getByText('Last 30 Days')).toBeVisible();
    });
  });
});
