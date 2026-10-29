import { CalendarDate, endOfMonth, startOfMonth } from '@internationalized/date';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { CalendarRange } from '../../..';
import { addMonths, createCalendarDate, getDefaultRanges } from '../defaultDefinedRanges';

import { DefinedRange } from '..';

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

  it('should render the sidebar for the relative dates', () => {
    render(
      <CalendarRange
        showCalendar
        showRanges
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const listBoxcontainer = screen.getAllByRole('listbox');

    expect(listBoxcontainer.length).toBeGreaterThanOrEqual(1);

    const results = listBoxcontainer.shift();

    expect(results).toBeDefined();
  });

  it('should render the sidebar with the default relative date ranges', () => {
    render(
      <CalendarRange
        showRanges
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const listBoxcontainer = screen.getAllByRole('listbox');

    expect(listBoxcontainer.length).toBeGreaterThanOrEqual(1);

    const results = listBoxcontainer.shift();

    expect(results).toBeDefined();
    expect(results).toContainHTML('Today');
    expect(results).toContainHTML('Yesterday');
    expect(results).toContainHTML('Last 7 days');
    expect(results).toContainHTML('Last 30 days');
    expect(results).toContainHTML('This Month');
    expect(results).toContainHTML('Last Month');
  });

  it('should render the calendar without relative date ranges', () => {
    render(
      <CalendarRange
        showCalendar
        showRanges={false}
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );
    const listBoxcontainer = screen.findAllByRole('listbox');
    const calendarResults = screen.getByTestId('calendar-date-picker');

    expect(calendarResults).toBeDefined();

    const sideBarResults = listBoxcontainer;

    expect(Object.keys(sideBarResults)).toHaveLength(0);
    expect(calendarResults).toBeDefined();
  });

  it('should render the calendar and sidebar with provided relative date ranges', () => {
    render(
      <CalendarRange
        showCalendar
        showRanges
        ranges={customRanges}
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const listBoxcontainer = screen.getAllByRole('listbox');
    const calendarResults = screen.getByTestId('calendar-date-picker');

    expect(listBoxcontainer.length).toBeGreaterThanOrEqual(1);
    expect(calendarResults).toBeDefined();

    const sideBarResults = listBoxcontainer.shift();

    expect(sideBarResults).toBeDefined();
    expect(calendarResults).toBeDefined();

    expect(sideBarResults).toContainHTML(customRanges[0].label);
    expect(sideBarResults).toContainHTML(customRanges[1].label);
    expect(sideBarResults).toContainHTML(customRanges[2].label);
    expect(sideBarResults).toContainHTML(customRanges[3].label);
  });

  it('should render the calendar and sidebar with provided relative date ranges and not the default ranges', () => {
    render(
      <CalendarRange
        showCalendar
        showRanges
        ranges={customRanges}
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const listBoxcontainer = screen.getAllByRole('listbox');
    const calendarResults = screen.getByTestId('calendar-date-picker');

    expect(listBoxcontainer.length).toBeGreaterThanOrEqual(1);
    expect(calendarResults).toBeDefined();

    const rangesResults = listBoxcontainer.shift();

    expect(rangesResults).toBeDefined();
    expect(calendarResults).toBeDefined();

    expect(rangesResults).toContainHTML(customRanges[0].label);
    expect(rangesResults).toContainHTML(customRanges[1].label);
    expect(rangesResults).toContainHTML(customRanges[2].label);
    expect(rangesResults).toContainHTML(customRanges[3].label);

    expect(rangesResults).not.toContainHTML('Today');
    expect(rangesResults).not.toContainHTML('Yesterday');
    expect(rangesResults).not.toContainHTML('This Week');
    expect(rangesResults).not.toContainHTML('Last Week');
    expect(rangesResults).not.toContainHTML('This Month');
    expect(rangesResults).not.toContainHTML('Last Month');
  });

  describe('range groups', () => {
    const value = { start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) };
    const groupsInRail = () => within(screen.getByRole('listbox')).queryAllByRole('group');
    const optionLabels = () => screen.getAllByRole('option').map((option) => option.textContent);
    const withGroups = (groups: (string | undefined)[]): DefinedRange[] =>
      getDefaultRanges().map((range, index) => ({ ...range, group: groups[index] }));

    it('renders the default ranges with no separators and no groups when none has a group', () => {
      render(<CalendarRange showRanges value={value} />);

      expect(optionLabels()).toEqual(getDefaultRanges().map((range) => range.label));
      expect(screen.queryAllByRole('separator')).toHaveLength(0);
      expect(groupsInRail()).toHaveLength(0);
    });

    it('renders explicitly ungrouped ranges exactly like ranges without a group field', () => {
      render(<CalendarRange showRanges ranges={withGroups([])} value={value} />);

      expect(optionLabels()).toEqual(getDefaultRanges().map((range) => range.label));
      expect(screen.queryAllByRole('separator')).toHaveLength(0);
      expect(groupsInRail()).toHaveLength(0);
    });

    it('draws one separator between each pair of groups and keeps the order', () => {
      render(
        <CalendarRange
          showRanges
          ranges={withGroups(['recent', 'recent', 'rolling', 'rolling', 'month', 'month'])}
          value={value}
        />,
      );

      expect(optionLabels()).toEqual(getDefaultRanges().map((range) => range.label));
      expect(groupsInRail()).toHaveLength(3);
      expect(screen.getAllByRole('separator')).toHaveLength(2);
    });

    it('starts a new group when the same group name appears again after another group', () => {
      render(
        <CalendarRange
          showRanges
          ranges={withGroups(['a', 'a', 'b', 'b', 'a', 'a'])}
          value={value}
        />,
      );

      expect(groupsInRail()).toHaveLength(3);
      expect(screen.getAllByRole('separator')).toHaveLength(2);
    });

    it('separates leading ungrouped ranges from the first group', () => {
      render(
        <CalendarRange
          showRanges
          ranges={withGroups([undefined, undefined, 'rolling', 'rolling', 'rolling', 'rolling'])}
          value={value}
        />,
      );

      expect(optionLabels()).toEqual(getDefaultRanges().map((range) => range.label));
      expect(groupsInRail()).toHaveLength(1);
      expect(screen.getAllByRole('separator')).toHaveLength(1);
    });

    it('does not show a visible heading for a group', () => {
      render(
        <CalendarRange
          showRanges
          ranges={withGroups(['recent', 'recent', 'rolling', 'rolling', 'month', 'month'])}
          value={value}
        />,
      );

      expect(screen.queryByText('recent')).not.toBeInTheDocument();
      expect(screen.queryByText('rolling')).not.toBeInTheDocument();
    });

    it('reports the picked range with its key from a later group', () => {
      const onRangeSelect = jest.fn();
      const onChange = jest.fn();

      render(
        <CalendarRange
          showRanges
          ranges={withGroups(['recent', 'recent', 'rolling', 'rolling', 'month', 'month'])}
          value={value}
          onChange={onChange}
          onRangeSelect={onRangeSelect}
        />,
      );

      fireEvent.click(screen.getByText('Last 30 days'));

      expect(onRangeSelect).toHaveBeenCalledWith(expect.objectContaining({ key: 'last30Days' }));
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
