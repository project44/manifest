import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Combobox, ComboboxItem, ComboboxSection, Flex, Icon } from '../src';

export default {
	title: 'Components/Combobox',
	component: Combobox,
	subcomponents: { ComboboxItem, ComboboxSection },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args) => <Combobox {...args} />;

export const Default = Template.bind({});

Default.decorators = [
	() => (
		<Combobox>
			<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
			<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
			<ComboboxItem key="snake">Snake</ComboboxItem>
		</Combobox>
	),
];

export const Sizes = Template.bind({});

Sizes.decorators = [
	() => (
		<Flex css={{ gap: '$small' }} orientation="vertical">
			<Combobox size="medium">
				<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
				<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
				<ComboboxItem key="snake">Snake</ComboboxItem>
			</Combobox>
			<Combobox size="small">
				<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
				<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
				<ComboboxItem key="snake">Snake</ComboboxItem>
			</Combobox>
		</Flex>
	),
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [
	() => (
		<Combobox startIcon={<Icon icon="search" />}>
			<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
			<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
			<ComboboxItem key="snake">Snake</ComboboxItem>
		</Combobox>
	),
];

export const FormControl = Template.bind({});

FormControl.decorators = [
	() => (
		<Combobox helperText="Helper text" label="Label" startIcon={<Icon icon="search" />}>
			<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
			<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
			<ComboboxItem key="snake">Snake</ComboboxItem>
		</Combobox>
	),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
	() => (
		<Combobox
			helperText="Error text"
			label="Label"
			startIcon={<Icon icon="search" />}
			validationState="invalid"
		>
			<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
			<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
			<ComboboxItem key="snake">Snake</ComboboxItem>
		</Combobox>
	),
];
