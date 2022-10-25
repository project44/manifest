import type { ComponentMeta } from '@storybook/react';
import { Box, Flex } from '../src';

export default {
	title: 'Components/Flex',
	component: Flex,
} as ComponentMeta<typeof Flex>;

export const Default = () => (
	<Flex>
		<Box css={{ backgroundColor: '$background-primary', height: 300, width: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', width: 100 }} />
		<Box css={{ backgroundColor: '$background-tertiary', flex: 1 }} />
	</Flex>
);

export const Align = () => (
	<Flex align="center" css={{ height: 200 }} gap="small">
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
	</Flex>
);

export const Justify = () => (
	<Flex gap="small" justify="end">
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
	</Flex>
);

export const Gap = () => (
	<Flex gap="large">
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
	</Flex>
);

export const Orientation = () => (
	<Flex gap="small" orientation="vertical">
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
	</Flex>
);

export const Wrap = () => (
	<Flex wrap gap="small">
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
		<Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
	</Flex>
);
