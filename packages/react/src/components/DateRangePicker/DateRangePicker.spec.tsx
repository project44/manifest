import * as React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate } from '@internationalized/date';
import { DateRangePicker } from './DateRangePicker';
import userEvent from '@testing-library/user-event';
import { addMonths, endOfMonth, startOfMonth } from 'date-fns';
import { createCalendarDate } from '../internal/CalendarSidebar/defaultDefinedRanges';
import { DefinedRange } from '../../types';

describe('@project44-manifest/components - Calendar', () => {
  let defaultDate: Date;
  let customRanges: DefinedRange[];
  beforeAll(() => {
    // * used for the custom Ranges To start defining the ranges.
    defaultDate = new Date();

    const defineds = {
      startOfLastThreeMonths: startOfMonth(addMonths(defaultDate, -3)),
      endOfLastThreeMonths: endOfMonth(addMonths(defaultDate, -1)),
      startOfLastSixMonths: startOfMonth(addMonths(defaultDate, -6)),
      endOfLastSixMonths: endOfMonth(addMonths(defaultDate, -1)),
      startOfLastYear: startOfMonth(addMonths(defaultDate, -13)),
      endOfLastYear: endOfMonth(addMonths(defaultDate, -1)),
      startOfLastTwoYears: startOfMonth(addMonths(defaultDate, -25)),
      endOfLastTwoYears: endOfMonth(addMonths(defaultDate, -1)),
    };

    customRanges = [
      {
        key: 'lastThreeMonths',
        label: 'Last three months',
        rangeAnchor: {
          start: createCalendarDate(defineds.startOfLastThreeMonths),
          end: createCalendarDate(defineds.endOfLastThreeMonths),
        },
      },
      {
        key: 'lastSixMonths',
        label: 'Last six months',
        rangeAnchor: {
          start: createCalendarDate(defineds.startOfLastSixMonths),
          end: createCalendarDate(defineds.endOfLastSixMonths),
        },
      },
      {
        key: 'lastYear',
        label: 'Last Year',
        rangeAnchor: {
          start: createCalendarDate(defineds.startOfLastYear),
          end: createCalendarDate(defineds.endOfLastYear),
        },
      },
      {
        key: 'lastTwoYears',
        label: 'Last Two Years',
        rangeAnchor: {
          start: createCalendarDate(defineds.startOfLastTwoYears),
          end: createCalendarDate(defineds.endOfLastTwoYears),
        },
      },
    ];
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<DateRangePicker isOpen />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should support selecting a date', async () => {
    const onChange = jest.fn();

    render(
      <DateRangePicker
        defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        onChange={onChange}
      />,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

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
      <DateRangePicker
        value={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        onChange={onChange}
      />,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

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
      <DateRangePicker
        defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
      />,
    );

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

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
      <DateRangePicker
        defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        onChange={onChange}
        showRanges={true}
        showCalendar={true}
      />,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    fireEvent.click(await screen.findByText('Yesterday'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(year, month + 1, day - 1),
      end: new CalendarDate(year, month + 1, day - 1),
    });
  });

  it('should support selecting a custom relative date', async () => {
    const onChange = jest.fn();
    const chosenRange = customRanges[customRanges.length - 1];

    render(
      <DateRangePicker
        defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        onChange={onChange}
        showRanges={true}
        ranges={customRanges}
      />,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    fireEvent.click(await screen.findByText('Last Two Years'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: chosenRange?.rangeAnchor.start,
      end: chosenRange?.rangeAnchor.end,
    });
  });
});
