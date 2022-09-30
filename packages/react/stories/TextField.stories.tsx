import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex, Icon, TextField } from '../src';

export default {
	title: 'Components/TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});

Default.decorators = [() => <TextField placeholder="Enter name..." />];

export const Sizes = Template.bind({});

Sizes.decorators = [
	() => (
		<Flex css={{ gap: '$small' }} orientation="vertical">
			<TextField placeholder="Enter name..." size="medium" />
			<TextField placeholder="Enter name..." size="small" />
		</Flex>
	),
];

export const Icons = Template.bind({});

Icons.decorators = [
	() => (
		<Flex css={{ gap: '$small' }} orientation="vertical">
			<TextField endIcon={<Icon icon="search" />} placeholder="Search..." />
			<TextField placeholder="Search..." startIcon={<Icon icon="search" />} />
		</Flex>
	),
];

export const Label = Template.bind({});

Label.decorators = [() => <TextField label="Search" placeholder="Search..." />];

export const HelperText = Template.bind({});

HelperText.decorators = [
	() => <TextField helperText="Please input a search term." placeholder="Search..." />,
];

export const Invalid = Template.bind({});

Invalid.decorators = [() => <TextField placeholder="Enter name..." validationState="invalid" />];

export const Controlled = Template.bind({});

Controlled.decorators = [
	() => {
		const [value, setValue] = React.useState('Kangaroo');

		return <TextField value={value} onChange={setValue} />;
	},
];
