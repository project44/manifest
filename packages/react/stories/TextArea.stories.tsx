import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from '../src';

export default {
	title: 'Components/TextArea',
	component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.decorators = [() => <TextArea placeholder="Enter name..." />];

export const Label = Template.bind({});

Label.decorators = [() => <TextArea label="Search" placeholder="Search..." />];

export const HelperText = Template.bind({});

HelperText.decorators = [
	() => <TextArea helperText="Please input a search term." placeholder="Search..." />,
];

export const Invalid = Template.bind({});

Invalid.decorators = [() => <TextArea placeholder="Enter name..." validationState="invalid" />];

export const Controlled = Template.bind({});

Controlled.decorators = [
	() => {
		const [value, setValue] = React.useState('Kangaroo');

		return <TextArea value={value} onChange={setValue} />;
	},
];
