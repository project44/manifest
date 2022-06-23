import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './Typography';

export default {
  component: Typography,
  title: 'Components/Typography',
  argTypes: {
    paragraph: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'body',
      options: [
        'display',
        'heading',
        'title',
        'subtitle',
        'body',
        'bodyBold',
        'subtext',
        'caption',
      ],
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Manifesting Project 44 experiences through design.',
};
