import type { ComponentMeta } from '@storybook/react';
import { Box, Stack } from '../src';

export default {
	title: 'Components/Stack',
	component: Stack,
} as ComponentMeta<typeof Stack>;

export function Default() {
	return (
		<Stack>
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
		</Stack>
	);
}

export function Gap() {
	return (
		<Stack gap="x-large">
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
		</Stack>
	);
}

export function Orientation() {
	return (
		<Stack gap="medium" orientation="horizontal">
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
			<Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
		</Stack>
	);
}
