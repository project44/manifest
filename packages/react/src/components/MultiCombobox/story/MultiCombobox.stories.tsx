import { Search } from '@project44-manifest/react-icons';
import type { ComponentStory } from '@storybook/react';
import { MultiCombobox, SelectItem, SelectSection } from '../../..';

export default {
  title: 'Components/MultiCombobox',
  component: MultiCombobox,
  subcomponents: { SelectItem, SelectSection },
};

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

export const WithStartIcon = Template.bind({});

WithStartIcon.args = {
  placeholder: 'Select time...',
  startIcon: <Search />,
};
