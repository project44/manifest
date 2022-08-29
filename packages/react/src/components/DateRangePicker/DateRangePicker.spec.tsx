import * as React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate, endOfMonth, startOfMonth } from '@internationalized/date';
import { DateRangePicker } from './DateRangePicker';
import userEvent from '@testing-library/user-event';
import { addMonths, createCalendarDate } from '../internal/CalendarRanges/defaultDefinedRanges';
import { DefinedRange } from '../internal/CalendarRanges';
import { Provider } from '../Provider';

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
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Provider>
        <DateRangePicker aria-label="Calendar" isOpen />
      </Provider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should support selecting a date', async () => {
    const onChange = jest.fn();

    render(
      <Provider>
        <DateRangePicker
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
        />
      </Provider>,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    const cells = screen.getAllByRole('gridcell');
    const selected = cells.filter(cell => cell.getAttribute('aria-selected') === 'true');

    expect(selected[0].children[0]).toHaveAttribute(
      'aria-label',
      'Selected Range: Saturday, July 2 to Tuesday, July 12, 2022, Saturday, July 2, 2022 selected',
    );

    fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
    fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should support being controlled', async () => {
    const onChange = jest.fn();

    render(
      <Provider>
        <DateRangePicker
          aria-label="Calendar"
          value={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
        />
      </Provider>,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    const cells = screen.getAllByRole('gridcell');
    const selected = cells.filter(cell => cell.getAttribute('aria-selected') === 'true');

    expect(selected[0].children[0]).toHaveAttribute(
      'aria-label',
      'Selected Range: Saturday, July 2 to Tuesday, July 12, 2022, Saturday, July 2, 2022 selected',
    );

    fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
    fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should close datepicker when outside click is register', async () => {
    render(
      <Provider>
        <DateRangePicker
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    await userEvent.click(document.body);

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });
  });

  it('should support selecting a relative date', async () => {
    const onChange = jest.fn();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    render(
      <Provider>
        <DateRangePicker
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
          showRanges={true}
          showCalendar={true}
        />
      </Provider>,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    fireEvent.click(await screen.findByText('Yesterday'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(year, month, day - 1),
      end: new CalendarDate(year, month, day - 1),
    });
  });

  it('should support selecting a custom relative date', async () => {
    const onChange = jest.fn();
    const chosenRange = customRanges[customRanges.length - 1];

    render(
      <Provider>
        <DateRangePicker
          aria-label="Calendar"
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
          showRanges={true}
          ranges={customRanges}
        />
      </Provider>,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('presentation');

    expect(dialog).toBeInTheDocument();

    fireEvent.click(await screen.findByText('Last Two Years'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: chosenRange?.value.start,
      end: chosenRange?.value.end,
    });
  });
});
