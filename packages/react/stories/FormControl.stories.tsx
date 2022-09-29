import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormControl } from '../src';

export default {
	title: 'Components/FormControl',
	component: FormControl,
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => <FormControl {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: <input />,
	helperText: 'Please provide your email.',
	label: 'Email',
};

export const Invalid = Template.bind({});

Invalid.args = {
	children: <input />,
	helperText: 'Please provide your email.',
	label: 'Email',
	validationState: 'invalid',
};

export const Required = Template.bind({});

Required.args = {
	children: <input />,
	helperText: 'Please provide your email.',
	isRequired: true,
	label: 'Email',
};
