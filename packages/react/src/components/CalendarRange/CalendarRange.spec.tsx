import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate, endOfMonth, startOfMonth } from '@internationalized/date';
import { CalendarRange } from '../CalendarRange';
import { addMonths, createCalendarDate } from '../internal/CalendarRanges/defaultDefinedRanges';
import { DefinedRange } from '../internal/CalendarRanges';

describe('@project44-manifest/react - CalendarRange', () => {
  let customRanges: DefinedRange[];
  beforeAll(() => {
    // * used for the custom Ranges To start defining the ranges.
    const defaultDate = new Date();
    const calendarDate = createCalendarDate(defaultDate);

    // * used to define the beggining and the end of each defined range.
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

  it('should have no accessibility violations when passed a default range value', async () => {
    const { container } = render(
      <CalendarRange
        defaultValue={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a range value', async () => {
    const { container } = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the sidebar for the relative dates', () => {
    const { container } = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
        showCalendar={true}
        showRanges={true}
      />,
    );

    const results = container.querySelector('.manifest-calendar-sidebar');

    expect(results).toBeDefined();
  });

  it('should render the sidebar with the default relative date ranges', () => {
    const { container } = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
        showRanges={true}
      />,
    );

    const results = container.querySelector('.manifest-calendar-sidebar');

    expect(results).toBeDefined();
    expect(results).toContainHTML('Today');
    expect(results).toContainHTML('Yesterday');
    expect(results).toContainHTML('This Week');
    expect(results).toContainHTML('Last Week');
    expect(results).toContainHTML('This Month');
    expect(results).toContainHTML('Last Month');
  });

  it('should render the calendar without relative date ranges', () => {
    const { container } = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
        showCalendar={true}
        showRanges={false}
      />,
    );

    const sideBarResults = container.querySelector('.manifest-calendar-sidebar');
    const calendarResults = container.querySelector('.manifest-datepicker__calendar');

    expect(sideBarResults).toBeNull();
    expect(calendarResults).toBeDefined();
  });

  it('should render the calendar and sidebar with provided relative date ranges', () => {
    const { container } = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
        showCalendar={true}
        showRanges={true}
        ranges={customRanges}
      />,
    );

    const sideBarResults = container.querySelector('.manifest-calendar-sidebar');
    const calendarResults = container.querySelector('.manifest-datepicker__calendar');

    expect(sideBarResults).toBeDefined();
    expect(calendarResults).toBeDefined();

    expect(sideBarResults).toContainHTML(customRanges[0].label);
    expect(sideBarResults).toContainHTML(customRanges[1].label);
    expect(sideBarResults).toContainHTML(customRanges[2].label);
    expect(sideBarResults).toContainHTML(customRanges[3].label);
  });

  it('should render the calendar and sidebar with provided relative date ranges and not the default ranges', () => {
    const wrapper = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
        showCalendar={true}
        showRanges={true}
        ranges={customRanges}
      />,
    );

    const sideBarResults = wrapper.container.querySelector('.manifest-calendar-sidebar');
    const calendarResults = wrapper.container.querySelector('.manifest-datepicker__calendar');

    expect(sideBarResults).toBeDefined();
    expect(calendarResults).toBeDefined();

    expect(sideBarResults).toContainHTML(customRanges[0].label);
    expect(sideBarResults).toContainHTML(customRanges[1].label);
    expect(sideBarResults).toContainHTML(customRanges[2].label);
    expect(sideBarResults).toContainHTML(customRanges[3].label);

    expect(sideBarResults).not.toContainHTML('Today');
    expect(sideBarResults).not.toContainHTML('Yesterday');
    expect(sideBarResults).not.toContainHTML('This Week');
    expect(sideBarResults).not.toContainHTML('Last Week');
    expect(sideBarResults).not.toContainHTML('This Month');
    expect(sideBarResults).not.toContainHTML('Last Month');
  });
});
