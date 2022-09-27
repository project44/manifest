import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { RangeValue } from '../CalendarRange';
import * as React from 'react';
import { CalendarDate, DateValue, endOfMonth, startOfMonth } from '@internationalized/date';
import { DateRangePicker } from './DateRangePicker';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { addMonths, createCalendarDate } from '../CalendarRanges/defaultDefinedRanges';

export default {
	title: 'Components/DateRangePicker',
	component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>;

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

		return <DateRangePicker showRanges={true} ranges={customRanges} />;
	},
];
