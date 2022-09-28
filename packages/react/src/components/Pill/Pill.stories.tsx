import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pill } from './Pill';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
	title: 'Components/Pill',
	component: Pill,
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {
	icon: <Icon icon="flight" />,
	label: 'In Transit',
};

export const ColorScheme = Template.bind({});

ColorScheme.decorators = [
	() => (
		<Flex align="center" css={{ gap: '$small' }}>
			<Pill colorScheme="indigo" icon={<Icon icon="flight" />} label="In Transit" />
			<Pill colorScheme="red" icon={<Icon icon="front_hand" />} label="On Hold" />
		</Flex>
	),
];

export const Collapsible = Template.bind({});

Collapsible.decorators = [
	() => (
		<Flex align="center" css={{ gap: '$small' }}>
			<Pill colorScheme="indigo" icon={<Icon icon="flight" />} isCollapsible label="In Transit" />
			<Pill colorScheme="red" icon={<Icon icon="front_hand" />} isCollapsible label="On Hold" />
		</Flex>
	),
];
