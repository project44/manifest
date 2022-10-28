import type { ComponentMeta } from '@storybook/react';
import { Container } from '../src';

export default {
	title: 'Components/Container',
	component: Container,
} as ComponentMeta<typeof Container>;

export function Default() {
	return (
		<Container>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</Container>
	);
}

export function MaxWidth() {
	return (
		<Container maxWidth="small">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</Container>
	);
}

export function Fixed() {
	return (
		<Container fixed>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</Container>
	);
}
