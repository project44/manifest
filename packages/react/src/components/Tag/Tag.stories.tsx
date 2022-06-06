import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined'],
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Tag',
  onClick: undefined,
  onRemove: undefined,
};
