import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../src';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
	variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
	variant: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
	variant: 'tertiary',
};

export const Danger = Template.bind({});

Danger.args = {
	variant: 'danger',
};

export const Brand = Template.bind({});

Brand.args = {
	variant: 'brand',
};

export const Medium = Template.bind({});

Medium.args = {
	size: 'medium',
};

export const Small = Template.bind({});

Small.args = {
	size: 'small',
};
