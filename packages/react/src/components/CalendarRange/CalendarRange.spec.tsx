import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate } from '@internationalized/date';
import { CalendarRange } from '../CalendarRange';
import { defaultDateRanges } from '../../constants';
import { DefaultRanges, DefinedRange } from '../../types';
import { createCalendarDate } from '../internal/CalendarSidebar/defaultDefinedRanges';
import { addMonths, endOfMonth, startOfMonth } from 'date-fns';

describe('@project44-manifest/react - CalendarRange', () => {
  let defaultRanges: DefaultRanges;
  let customRanges: DefinedRange[];
  beforeAll(() => {
    // * used for the custom Ranges To start defining the ranges.
    const defaultDate = new Date();

    // * used to define the beggining and the end of each defined range.
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

    defaultRanges = defaultDateRanges;
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
    const { today, yesterday, thisWeek, lastWeek, thisMonth, lastMonth } = defaultRanges;
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
    expect(results).toContainHTML(today.label);
    expect(results).toContainHTML(yesterday.label);
    expect(results).toContainHTML(thisWeek.label);
    expect(results).toContainHTML(lastWeek.label);
    expect(results).toContainHTML(thisMonth.label);
    expect(results).toContainHTML(lastMonth.label);
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
    const { today, yesterday, thisWeek, lastWeek, thisMonth, lastMonth } = defaultRanges;
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

    expect(sideBarResults).not.toContainHTML(today.label);
    expect(sideBarResults).not.toContainHTML(yesterday.label);
    expect(sideBarResults).not.toContainHTML(thisWeek.label);
    expect(sideBarResults).not.toContainHTML(lastWeek.label);
    expect(sideBarResults).not.toContainHTML(thisMonth.label);
    expect(sideBarResults).not.toContainHTML(lastMonth.label);
  });
});
