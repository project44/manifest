import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../src';

export default {
	title: 'Components/Box',
	component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
	css: { backgroundColor: '$background-top-nav', size: 200 },
};
