import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { MultiCombobox } from './MultiCombobox';
import { SelectItem } from '../SelectItem';
import { SelectSection } from '../SelectSection';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
	title: 'Components/MultiCombobox',
	component: MultiCombobox,
	subcomponents: { SelectItem, SelectSection },
} as ComponentMeta<typeof MultiCombobox>;

const Template: ComponentStory<typeof MultiCombobox> = (args) => (
	<MultiCombobox {...args}>
		<SelectItem key="late">Running Late</SelectItem>
		<SelectItem key="early">Running Early</SelectItem>
		<SelectItem key="estimated">Estimated Time</SelectItem>
		<SelectItem key="planned">Planned Time</SelectItem>
		<SelectItem key="actual">Actual Time</SelectItem>
	</MultiCombobox>
);

export const Default = Template.bind({});

Default.args = {
	placeholder: 'Select time...',
};
