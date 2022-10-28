import type { ComponentMeta } from '@storybook/react';
import { Box } from '../src';

export default {
	title: 'Components/Box',
	component: Box,
} as ComponentMeta<typeof Box>;

export function Default() {
	return <Box css={{ backgroundColor: '$palette-blue-500', size: 200 }} />;
}

export function AsProp() {
	return (
		<Box
			as="span"
			css={{
				border: '1px solid $border-primary',
				borderRadius: '$full',
				px: '$medium',
				py: '$small',
			}}
		>
			Box
		</Box>
	);
}
