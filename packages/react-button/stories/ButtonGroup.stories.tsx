import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonGroup } from '../src';

export default {
	title: 'Components/ButtonGroup',
	component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
	<ButtonGroup {...args}>
		<Button>Button</Button>
		<Button>Button</Button>
	</ButtonGroup>
);

export const Default = Template.bind({});

export const Attached = Template.bind({});

Attached.args = {
	isAttached: true,
};
