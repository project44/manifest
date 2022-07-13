import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { CalendarDate, DateValue } from '@internationalized/date';
import { DatePicker } from './DatePicker';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => <DatePicker {...args} />;

export const Default = Template.bind({});

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small' }} orientation="vertical">
      <DatePicker size="medium" />
      <DatePicker size="small" />
    </Flex>
  ),
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [() => <DatePicker startIcon={<Icon icon="search" />} />];

export const Label = Template.bind({});

Label.decorators = [() => <DatePicker label="Delivery Date" />];

export const HelperText = Template.bind({});

HelperText.decorators = [() => <DatePicker helperText="Please select a date" />];

export const Disabled = Template.bind({});

Disabled.decorators = [() => <DatePicker isDisabled />];

export const ReadOnly = Template.bind({});

ReadOnly.decorators = [
  () => <DatePicker defaultValue={new CalendarDate(2022, 7, 12)} isReadOnly />,
];

export const Invalid = Template.bind({});

Invalid.decorators = [() => <DatePicker helperText="Error text" validationState="invalid" />];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [value, setValue] = React.useState<DateValue>(new CalendarDate(2022, 7, 12));

    return <DatePicker onChange={setValue} value={value} />;
  },
];
