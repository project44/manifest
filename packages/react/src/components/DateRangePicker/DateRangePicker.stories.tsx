import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { RangeValue } from '../CalendarRange';
import * as React from 'react';
import { CalendarDate, DateValue } from '@internationalized/date';
import { DateRangePicker } from './DateRangePicker';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { createCalendarDate } from '../internal/CalendarRanges/defaultDefinedRanges';
import { startOfMonth, endOfMonth, addMonths } from 'date-fns';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>;

const Template: ComponentStory<typeof DateRangePicker> = args => <DateRangePicker {...args} />;

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
      defaultValue={{
        start: new CalendarDate(2022, 7, 2),
        end: new CalendarDate(2022, 7, 12),
      }}
      isReadOnly
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

    return <DateRangePicker onChange={setValue} value={value} />;
  },
];

export const WithRelativeRanges = Template.bind({});

WithRelativeRanges.decorators = [
  () => {
    return <DateRangePicker showRanges={true} />;
  },
];

export const OnlyRelativeRanges = Template.bind({});

OnlyRelativeRanges.decorators = [
  () => {
    return <DateRangePicker showRanges={true} showCalendar={false} />;
  },
];

export const CustomRelativeRanges = Template.bind({});

CustomRelativeRanges.decorators = [
  () => {
    const defaultDate = new Date();
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
    const customRanges = [
      {
        key: 'lastThreeMonths',
        label: 'Last three months',
        value: {
          start: createCalendarDate(defineds.startOfLastThreeMonths),
          end: createCalendarDate(defineds.endOfLastThreeMonths),
        },
      },
      {
        key: 'lastSixMonths',
        label: 'Last six months',
        value: {
          start: createCalendarDate(defineds.startOfLastSixMonths),
          end: createCalendarDate(defineds.endOfLastSixMonths),
        },
      },
      {
        key: 'lastYear',
        label: 'Last Year',
        value: {
          start: createCalendarDate(defineds.startOfLastYear),
          end: createCalendarDate(defineds.endOfLastYear),
        },
      },
      {
        key: 'lastTwoYears',
        label: 'Last Two Years',
        value: {
          start: createCalendarDate(defineds.startOfLastTwoYears),
          end: createCalendarDate(defineds.endOfLastTwoYears),
        },
      },
    ];

    return <DateRangePicker showRanges={true} ranges={customRanges} />;
  },
];
