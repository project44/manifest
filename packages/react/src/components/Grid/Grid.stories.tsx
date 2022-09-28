import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Grid } from './Grid';
import { GridItem } from '../GridItem';

export default {
	title: 'Components/Grid',
	component: Grid,
	subcomponents: { GridItem },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
	<Grid {...args}>
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
	</Grid>
);

export const Default = Template.bind({});

Default.decorators = [
	() => (
		<Grid columns="repeat(5, 1fr)" gap="small">
			<GridItem css={{ backgroundColor: '$background-secondary' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		</Grid>
	),
];

export const Rows = Template.bind({});

Rows.decorators = [
	() => (
		<Grid rows="repeat(5, 1fr)" gap="small">
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		</Grid>
	),
];

export const Span = Template.bind({});

Span.decorators = [
	() => (
		<Grid columns="repeat(5, 1fr)" css={{ height: '200px' }} gap="small" rows="repeat(2, 1fr)">
			<GridItem column={1} row={2} css={{ backgroundColor: '$background-secondary' }} />
			<GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
			<GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
			<GridItem column={4} css={{ backgroundColor: '$background-secondary' }} />
		</Grid>
	),
];

export const Alignment = Template.bind({});

Alignment.decorators = [
	() => (
		<Grid columns="repeat(5, 1fr)" gap="small">
			<GridItem
				column={2}
				css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
			/>
			<GridItem
				columnStart={4}
				columnEnd={6}
				css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
			/>
		</Grid>
	),
];
