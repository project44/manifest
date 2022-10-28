import type { ComponentMeta } from '@storybook/react';
import { Grid, GridItem } from '../src';

export default {
	title: 'Components/Grid',
	component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default = () => (
	<Grid columns="repeat(5, 1fr)" css={{ width: '100%' }} gap="small">
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
	</Grid>
);

export const Rows = () => (
	<Grid css={{ width: '100%' }} gap="small" rows="repeat(5, 1fr)">
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
	</Grid>
);

export const Spanning = () => (
	<Grid
		columns="repeat(5, 1fr)"
		css={{ height: '200px', width: '100%' }}
		gap="small"
		rows="repeat(2, 1fr)"
	>
		<GridItem column={1} css={{ backgroundColor: '$background-secondary' }} row={2} />
		<GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
		<GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
		<GridItem column={4} css={{ backgroundColor: '$background-secondary' }} />
	</Grid>
);

export const Position = () => (
	<Grid columns="repeat(5, 1fr)" css={{ width: '100%' }} gap="small">
		<GridItem
			column={2}
			css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
		/>
		<GridItem
			columnEnd={6}
			columnStart={4}
			css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
		/>
	</Grid>
);
