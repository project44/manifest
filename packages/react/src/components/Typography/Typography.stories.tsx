import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from '../Flex';
import { Typography } from './Typography';

export default {
	component: Typography,
	title: 'Components/Typography',
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'Manifesting Project 44 experiences through design.',
};

export const Variants = Template.bind({});

Variants.decorators = [
	() => (
		<Flex css={{ gap: '$small' }} orientation="vertical">
			<Typography variant="display">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="heading">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="title">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="subtitle">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="body">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="bodyBold">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="subtext">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="subtextBold">
				Manifesting Project 44 experiences through design.
			</Typography>
			<Typography variant="caption">Manifesting Project 44 experiences through design.</Typography>
			<Typography variant="captionBold">
				Manifesting Project 44 experiences through design.
			</Typography>
		</Flex>
	),
];
