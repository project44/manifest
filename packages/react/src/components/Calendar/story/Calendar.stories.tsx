import * as React from 'react';
import { useLocale } from '@react-aria/i18n';
import type { DateValue } from '@react-types/calendar';
import type { RangeValue } from '@react-types/shared';
import { CalendarDate, isWeekend } from '@internationalized/date';
import type { ComponentStory } from '@storybook/react';
import { Box, Calendar, CalendarRange } from '../../..';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  subcomponents: { CalendarRange },
};

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Box css={{ width: 324 }}>
    <Calendar {...args} />
  </Box>
);

export const Default = Template.bind({});

export const Range = Template.bind({});

Range.decorators = [
  () => (
    <Box css={{ width: 450 }}>
      <CalendarRange
        showCalendar
        showRanges
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />
    </Box>
  ),
];

export const Disabled = Template.bind({});

Disabled.decorators = [
  () => (
    <Box css={{ width: 324 }}>
      <Calendar isDisabled defaultValue={new CalendarDate(2022, 7, 12)} />
    </Box>
  ),
];

export const ReadOnly = Template.bind({});

ReadOnly.decorators = [
  () => (
    <Box css={{ width: 324 }}>
      <Calendar isReadOnly defaultValue={new CalendarDate(2022, 7, 12)} />
    </Box>
  ),
];

export const DisabledDays = Template.bind({});

DisabledDays.decorators = [
  () => {
    const { locale } = useLocale();

    const isDateUnavailable = React.useCallback(
      (date: DateValue) => isWeekend(date, locale),
      [locale],
    );

    return (
      <Box css={{ width: 324 }}>
        <Calendar
          defaultValue={new CalendarDate(2022, 7, 12)}
          isDateUnavailable={isDateUnavailable}
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
        <CalendarRange showCalendar value={value} onChange={setValue} />
      </Box>
    );
  },
];
