import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Tooltip } from '../src';

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: <Button>Hover Me</Button>,
	title: 'Tooltip',
};

export const Placement = Template.bind({});

Placement.args = {
	children: <Button>Hover Me</Button>,
	placement: 'right',
	title: 'Tooltip',
};

export const Controlled = Template.bind({});

Controlled.decorators = [
	() => {
		const [open, setOpen] = React.useState(false);

		return (
			<Tooltip isOpen={open} title="Tooltip" onOpenChange={setOpen}>
				<Button>Controlled</Button>
			</Tooltip>
		);
	},
];
