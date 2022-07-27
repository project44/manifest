import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { RangeValue } from '../CalendarRange';
import * as React from 'react';
import { CalendarDate, DateValue } from '@internationalized/date';
import { DateRangePicker } from './DateRangePicker';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

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
