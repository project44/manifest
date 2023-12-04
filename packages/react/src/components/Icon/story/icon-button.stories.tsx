import type { StoryFn } from '@storybook/react';
import { IconButton } from '../../..';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'danger', 'primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'radio',
      options: ['medium', 'small'],
    },
  },
};

const Template: StoryFn<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <i className="material-icons">add</i>
  </IconButton>
);

export const Default = Template.bind({});
