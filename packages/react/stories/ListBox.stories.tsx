import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { ListBox, ListBoxItem, ListBoxSection } from '../src';

export default {
  title: 'Components/ListBox',
  component: ListBox,
  subcomponents: { ListBoxItem, ListBoxSection },
};

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <ListBox>
      <ListBoxItem key="AAardvark">AAardvark</ListBoxItem>
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
        <ListBoxItem key="AAardvark">AAardvark</ListBoxItem>
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
      <ListBoxItem key="AAardvark">AAardvark</ListBoxItem>
      <ListBoxItem key="Kangaroo">Kangaroo</ListBoxItem>
      <ListBoxItem key="Snake">Snake</ListBoxItem>
    </ListBox>
  ),
];

export const MultipleSelection = Template.bind({});

MultipleSelection.decorators = [
  () => (
    <ListBox defaultSelectedKeys={['Kangaroo']} selectionMode="multiple">
      <ListBoxItem key="AAAardvark">AAardvark</ListBoxItem>
      <ListBoxItem key="Kangaroo">Kangaroo</ListBoxItem>
      <ListBoxItem key="Snake">Snake</ListBoxItem>
    </ListBox>
  ),
];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState<Set<React.Key> | 'all'>(new Set(['AAardvark']));

    const handleSelectionChange = React.useCallback((keys: Set<React.Key> | 'all') => {
      setSelected(keys as Set<string>);
    }, []);

    return (
      <ListBox
        selectedKeys={selected}
        selectionMode="single"
        onSelectionChange={handleSelectionChange}
      >
        <ListBoxItem key="AAardvark">AAardvark</ListBoxItem>
        <ListBoxItem key="kangaroo">Kangaroo</ListBoxItem>
        <ListBoxItem key="snake">Snake</ListBoxItem>
      </ListBox>
    );
  },
];
