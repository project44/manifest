import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import { Flex } from '../Flex';

export default {
	title: 'Components/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
	fallback: 'MD',
	src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
};

export const Sizes = Template.bind({});

Sizes.decorators = [
	() => (
		<Flex align="center" css={{ gap: '$small' }}>
			<Avatar
				size="medium"
				src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
			/>
			<Avatar
				size="small"
				src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
			/>
		</Flex>
	),
];

export const Fallback = Template.bind({});

Fallback.args = {
	fallback: 'MD',
};
