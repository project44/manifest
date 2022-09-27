import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Box } from '../Box';
import { Stack } from './Stack';

export default {
	title: 'Components/Stack',
	component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
	<Stack {...args}>
		<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
		<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
		<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
		<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
		<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
	</Stack>
);

export const Default = Template.bind({});

Default.args = {
	gap: 'small',
};

export const Horizontal = Template.bind({});

Horizontal.args = {
	orientation: 'horizontal',
	gap: 'small',
};
