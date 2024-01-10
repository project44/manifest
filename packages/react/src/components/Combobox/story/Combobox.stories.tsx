import type { StoryFn } from '@storybook/react';
import { Combobox, ComboboxItem, ComboboxSection, Flex, Icon, Typography } from '../../..';

export default {
  title: 'Components/Combobox',
  component: Combobox,
  subcomponents: { ComboboxItem, ComboboxSection },
};

const Template: StoryFn<typeof Combobox> = (args) => <Combobox {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <Combobox>
      <ComboboxItem key="Aardvark">
        AardvarkAardvarkAardvarkAardvarkAardvarkAardvarkAardvarkAardvarkAardvarkAardvarkAardvark
      </ComboboxItem>
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
        <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
      <Combobox size="small">
        <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
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
      <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
      <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
      <ComboboxItem key="snake">Snake</ComboboxItem>
    </Combobox>
  ),
];

export const Variant = Template.bind({});

Variant.decorators = [
  () => (
    <Flex css={{ gap: '$small' }} orientation="vertical">
      <Combobox>
        <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
      <Combobox variant="autocomplete">
        <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
    </Flex>
  ),
];

export const Loading = Template.bind({});

Loading.decorators = [
  () => (
    <Combobox loading loadingText="Loading...">
      <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
      <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
      <ComboboxItem key="snake">Snake</ComboboxItem>
    </Combobox>
  ),
];

export const NoResultsChildren = Template.bind({});

NoResultsChildren.decorators = [
  () => (
    // eslint-disable-next-line react/self-closing-comp
    <Combobox
      helperText="Start typing 'test' to see no results state..."
      noResultsChildren={<Typography variant="caption">No results</Typography>}
    >
      <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
    </Combobox>
  ),
];

export const FormControl = Template.bind({});

FormControl.decorators = [
  () => (
    <Combobox helperText="Helper text" label="Label" startIcon={<Icon icon="search" />}>
      <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
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
      <ComboboxItem key="Aardvark">Aardvark</ComboboxItem>
      <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
      <ComboboxItem key="snake">Snake</ComboboxItem>
    </Combobox>
  ),
];

export const CustomWidth = Template.bind({});

CustomWidth.decorators = [
  () => (
    <div style={{ width: '300px' }}>
      <Combobox
        wide
        helperText="Error text"
        label="Label"
        startIcon={<Icon icon="search" />}
        validationState="invalid"
      >
        <ComboboxItem key="Aardvark">
          Aardvark Aardvark Aardvark Aardvark Aardvark Aardvark Aardvark
        </ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
    </div>
  ),
];
