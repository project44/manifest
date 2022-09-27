import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ListBox } from './ListBox';
import { ListBoxItem } from '../ListBoxItem';
import { ListBoxSection } from '../ListBoxSection';

export default {
	title: 'Components/ListBox',
	component: ListBox,
	subcomponents: { ListBoxItem, ListBoxSection },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Default = Template.bind({});

Default.decorators = [
	() => (
		<ListBox>
			<ListBoxItem key="ardvark">Ardvark</ListBoxItem>
			<ListBoxItem key="kangaroo">Kangaroo</ListBoxItem>
			<ListBoxItem key="snake">Snake</ListBoxItem>
		</ListBox>
	),
];

export const Sections = Template.bind({});

Sections.decorators = [
	() => (
		<ListBox>
			<ListBoxSection title="Animals">
				<ListBoxItem key="ardvark">Ardvark</ListBoxItem>
				<ListBoxItem key="kangaroo">Kangaroo</ListBoxItem>
				<ListBoxItem key="snake">Snake</ListBoxItem>
			</ListBoxSection>
		</ListBox>
	),
];

export const SingleSelection = Template.bind({});

SingleSelection.decorators = [
	() => (
		<ListBox defaultSelectedKeys={['Kangaroo']} selectionMode="single">
			<ListBoxItem key="Ardvark">Ardvark</ListBoxItem>
			<ListBoxItem key="Kangaroo">Kangaroo</ListBoxItem>
			<ListBoxItem key="Snake">Snake</ListBoxItem>
		</ListBox>
	),
];

export const MultipleSelection = Template.bind({});

MultipleSelection.decorators = [
	() => (
		<ListBox defaultSelectedKeys={['Kangaroo']} selectionMode="multiple">
			<ListBoxItem key="Ardvark">Ardvark</ListBoxItem>
			<ListBoxItem key="Kangaroo">Kangaroo</ListBoxItem>
			<ListBoxItem key="Snake">Snake</ListBoxItem>
		</ListBox>
	),
];

export const Controlled = Template.bind({});

Controlled.decorators = [
	() => {
		const [selected, setSelected] = React.useState<'all' | Set<React.Key>>(new Set(['Ardvark']));

		return (
			<ListBox
				onSelectionChange={(selected) => setSelected(selected)}
				selectedKeys={selected}
				selectionMode="single"
			>
				<ListBoxItem key="Ardvark">Ardvark</ListBoxItem>
				<ListBoxItem key="kangaroo">Kangaroo</ListBoxItem>
				<ListBoxItem key="snake">Snake</ListBoxItem>
			</ListBox>
		);
	},
];
