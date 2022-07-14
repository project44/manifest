import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { DateValue } from '@react-types/calendar';
import type { RangeValue } from '@react-types/shared';
import * as React from 'react';
import { CalendarDate, isWeekend } from '@internationalized/date';
import { Box } from '../Box';
import { Calendar } from './Calendar';
import { CalendarRange } from './CalendarRange';
import { useLocale } from '@react-aria/i18n';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  subcomponents: { CalendarRange },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = args => (
  <Box css={{ width: 324 }}>
    <Calendar {...args} />
  </Box>
);

export const Default = Template.bind({});

export const Range = Template.bind({});

Range.decorators = [
  () => (
    <Box css={{ width: 324 }}>
      <CalendarRange />
    </Box>
  ),
];

export const Disabled = Template.bind({});

Disabled.decorators = [
  () => (
    <Box css={{ width: 324 }}>
      <Calendar defaultValue={new CalendarDate(2022, 7, 12)} isDisabled />
    </Box>
  ),
];

export const ReadOnly = Template.bind({});

ReadOnly.decorators = [
  () => (
    <Box css={{ width: 324 }}>
      <Calendar defaultValue={new CalendarDate(2022, 7, 12)} isReadOnly />
    </Box>
  ),
];

export const DisabledDays = Template.bind({});

DisabledDays.decorators = [
  () => {
    const { locale } = useLocale();

    return (
      <Box css={{ width: 324 }}>
        <Calendar
          isDateUnavailable={(date: DateValue) => isWeekend(date, locale)}
          defaultValue={new CalendarDate(2022, 7, 12)}
        />
      </Box>
    );
  },
];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [value, setValue] = React.useState<DateValue>(new CalendarDate(2022, 7, 12));

    return (
      <Box css={{ width: 324 }}>
        <Calendar value={value} onChange={setValue} />
      </Box>
    );
  },
];

export const ControlledRange = Template.bind({});

ControlledRange.decorators = [
  () => {
    const [value, setValue] = React.useState<RangeValue<DateValue>>({
      start: new CalendarDate(2022, 7, 2),
      end: new CalendarDate(2022, 7, 12),
    });

    return (
      <Box css={{ width: 324 }}>
        <CalendarRange value={value} onChange={setValue} />
      </Box>
    );
  },
];
