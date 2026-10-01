import * as React from 'react';
import {
  CalendarDate,
  DateValue,
  endOfMonth,
  endOfWeek,
  getLocalTimeZone,
  startOfMonth,
  startOfWeek,
  today,
} from '@internationalized/date';
import type { ComponentStory } from '@storybook/react';
import { DateRangePicker, Flex, Icon } from '../../..';
import type { RangeValue } from '../../CalendarRange';
import { addMonths, createCalendarDate } from '../../CalendarRanges/defaultDefinedRanges';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
};

const Template: ComponentStory<typeof DateRangePicker> = (args) => <DateRangePicker {...args} />;

export const Default = Template.bind({});

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small' }} orientation="vertical">
      <DateRangePicker size="medium" />
      <DateRangePicker size="small" />
    </Flex>
  ),
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [() => <DateRangePicker startIcon={<Icon icon="search" />} />];

export const Label = Template.bind({});

Label.decorators = [() => <DateRangePicker label="Delivery Date" />];

export const HelperText = Template.bind({});

HelperText.decorators = [() => <DateRangePicker helperText="Please select a date" />];

export const Disabled = Template.bind({});

Disabled.decorators = [() => <DateRangePicker isDisabled />];

export const ReadOnly = Template.bind({});

ReadOnly.decorators = [
  () => (
    <DateRangePicker
      isReadOnly
      defaultValue={{
        start: new CalendarDate(2023, 5, 10),
        end: new CalendarDate(2023, 5, 23),
      }}
    />
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [() => <DateRangePicker helperText="Error text" validationState="invalid" />];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [value, setValue] = React.useState<RangeValue<DateValue>>({
      start: new CalendarDate(2022, 7, 2),
      end: new CalendarDate(2022, 7, 12),
    });

    return <DateRangePicker value={value} onChange={setValue} />;
  },
];

export const WithRelativeRanges = Template.bind({});

WithRelativeRanges.decorators = [() => <DateRangePicker showRanges />];

export const OnlyRelativeRanges = Template.bind({});

OnlyRelativeRanges.decorators = [() => <DateRangePicker showRanges showCalendar={false} />];

export const CustomRelativeRanges = Template.bind({});

CustomRelativeRanges.decorators = [
  () => {
    const defaultDate = new Date();
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
    const customRanges = [
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

    return <DateRangePicker showRanges ranges={customRanges} />;
  },
];

// Mirrors the preset rail last-mile-tracking's MultiLevelDateRow builds
// (buildDefaultRanges) — reused by the two rangeDisplayMode stories below.
function buildLastMileTrackingRanges() {
  const tz = getLocalTimeZone();
  const ref = today(tz);
  const dayBefore = (n: number) => ref.subtract({ days: n });
  const dayAfter = (n: number) => ref.add({ days: n });
  const thisWeekStart = startOfWeek(ref, 'en-US');
  const thisWeekEnd = endOfWeek(ref, 'en-US');
  const nextWeekStart = thisWeekStart.add({ weeks: 1 });
  const nextWeekEnd = thisWeekEnd.add({ weeks: 1 });

  return [
    { key: 'today', label: 'Today', value: { start: ref, end: ref } },
    { key: 'tomorrow', label: 'Tomorrow', value: { start: dayAfter(1), end: dayAfter(1) } },
    {
      key: 'next-week',
      label: 'Next Week',
      value: { start: nextWeekStart, end: nextWeekEnd },
    },
    { key: 'next-7-days', label: 'Next 7 Days', value: { start: ref, end: dayAfter(6) } },
    { key: 'yesterday', label: 'Yesterday', value: { start: dayBefore(1), end: dayBefore(1) } },
    {
      key: 'last-24-hours',
      label: 'Last 24 Hours',
      value: { start: dayBefore(1), end: ref },
    },
    {
      key: 'last-48-hours',
      label: 'Last 48 Hours',
      value: { start: dayBefore(2), end: ref },
    },
    { key: 'this-week', label: 'This Week', value: { start: thisWeekStart, end: thisWeekEnd } },
    { key: 'last-7-days', label: 'Last 7 Days', value: { start: dayBefore(6), end: ref } },
    {
      key: 'this-month',
      label: 'This Month',
      value: {
        start: startOfMonth(ref),
        end: endOfMonth(ref),
      },
    },
    { key: 'last-30-days', label: 'Last 30 Days', value: { start: dayBefore(29), end: ref } },
    { key: 'last-60-days', label: 'Last 60 Days', value: { start: dayBefore(59), end: ref } },
    { key: 'last-90-days', label: 'Last 90 Days', value: { start: dayBefore(89), end: ref } },
  ];
}

export const WithPresetLabel = Template.bind({});

// rangeDisplayMode="preset" — trigger shows just the preset's label (e.g.
// "Last 7 Days") instead of the resolved date range.
WithPresetLabel.decorators = [
  () => (
    <DateRangePicker showRanges rangeDisplayMode="preset" ranges={buildLastMileTrackingRanges()} />
  ),
];

export const WithPresetLabelAndRange = Template.bind({});

// rangeDisplayMode="presetWithRange" — trigger shows the preset's label plus
// the resolved date range (e.g. "Last 7 Days (Jun 1, 2026 - Jun 7, 2026)").
WithPresetLabelAndRange.decorators = [
  () => (
    <DateRangePicker
      showRanges
      rangeDisplayMode="presetWithRange"
      ranges={buildLastMileTrackingRanges()}
    />
  ),
];
