import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Tag } from './Tag';

export default {
	title: 'Components/Tag',
	component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'Tag',
};

export const Removeable = Template.bind({});

Removeable.args = {
	children: 'Tag',
	isRemovable: true,
};
